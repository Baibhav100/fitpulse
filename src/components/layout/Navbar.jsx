import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown, ArrowRight } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'Shop',
    to: '/shop',
    children: [
      { label: 'Home Gym', to: '/shop/home-gym' },
      { label: 'Strength', to: '/shop/strength' },
      { label: 'Cardio', to: '/shop/cardio' },
      { label: 'Running', to: '/shop/running' },
      { label: 'Recovery', to: '/shop/recovery' },
      { label: 'Fitness Tech', to: '/shop/fitness-tech' },
      { label: 'Yoga & Mobility', to: '/shop/yoga-mobility' },
    ],
  },
  { label: 'Compare', to: '/compare' },
  { label: 'Best Picks', to: '/best' },
  { label: 'Buying Guides', to: '/guides' },
  { label: 'Fitness Tools', to: '/tools' },
  { label: 'Reviews', to: '/reviews' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileShopExpanded, setMobileShopExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  const handleDropdownEnter = (label) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    // Check initial scroll position on mount
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body & document scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Auto-close mobile drawer if viewport is resized to desktop width (> 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container-lg">
          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="FITPULSE Home">
            <Zap size={22} className="navbar__logo-icon" />
            <span className="navbar__logo-text">FITPULSE</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar__links" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="navbar__dropdown-trigger"
                  onMouseEnter={() => handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                    }
                  >
                    {link.label}
                    <ChevronDown size={14} className="navbar__chevron" />
                  </NavLink>
                  {activeDropdown === link.label && (
                    <div
                      className="navbar__dropdown"
                      onMouseEnter={() => handleDropdownEnter(link.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="navbar__dropdown-item"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA */}
          <Link to="/tools" className="btn btn-primary btn-sm navbar__cta hide-tablet">
            Find My Best Gear
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="navbar__mobile-btn"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Side Drawer & Overlay rendered in Portal outside <header> */}
      {mobileOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div className="navbar__drawer-root">
            {/* Backdrop overlay */}
            <div
              className="navbar__drawer-backdrop"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in Side Drawer panel */}
            <aside
              className="navbar__side-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation drawer"
            >
              {/* Drawer Top Header */}
              <div className="navbar__drawer-header">
                <Link
                  to="/"
                  className="navbar__logo"
                  aria-label="FITPULSE Home"
                  onClick={() => setMobileOpen(false)}
                >
                  <Zap size={22} className="navbar__logo-icon" />
                  <span className="navbar__logo-text">FITPULSE</span>
                </Link>
                <button
                  type="button"
                  className="navbar__drawer-close"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation drawer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <nav className="navbar__drawer-nav" aria-label="Mobile links">
                {navLinks.map((link) => {
                  if (link.children) {
                    return (
                      <div key={link.label} className="navbar__drawer-group">
                        <div className="navbar__drawer-group-header">
                          <NavLink
                            to={link.to}
                            className={({ isActive }) =>
                              `navbar__drawer-link ${isActive ? 'navbar__drawer-link--active' : ''}`
                            }
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </NavLink>
                          <button
                            type="button"
                            className={`navbar__drawer-toggle-btn ${mobileShopExpanded ? 'navbar__drawer-toggle-btn--open' : ''}`}
                            onClick={() => setMobileShopExpanded((prev) => !prev)}
                            aria-label="Toggle subcategories"
                            aria-expanded={mobileShopExpanded}
                          >
                            <ChevronDown size={18} />
                          </button>
                        </div>

                        {mobileShopExpanded && (
                          <div className="navbar__drawer-sublinks">
                            {link.children.map((child) => (
                              <NavLink
                                key={child.to}
                                to={child.to}
                                className={({ isActive }) =>
                                  `navbar__drawer-sublink ${isActive ? 'navbar__drawer-sublink--active' : ''}`
                                }
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <NavLink
                      key={link.label}
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `navbar__drawer-link ${isActive ? 'navbar__drawer-link--active' : ''}`
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  );
                })}
              </nav>

              {/* Drawer Bottom CTA */}
              <div className="navbar__drawer-footer">
                <Link
                  to="/tools"
                  className="btn btn-primary btn-md navbar__drawer-cta"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Find My Best Gear</span>
                  <ArrowRight size={16} />
                </Link>
                <p className="navbar__drawer-caption">
                  Independent, research-backed fitness gear recommendations.
                </p>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}

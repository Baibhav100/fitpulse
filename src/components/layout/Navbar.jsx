import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
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
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
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
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
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
                  <div className="navbar__dropdown">
                    {link.children.map((child) => (
                      <Link key={child.to} to={child.to} className="navbar__dropdown-item">
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

        {/* Mobile Toggle */}
        <button
          className="navbar__mobile-btn"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="navbar__mobile-menu" role="dialog" aria-label="Mobile navigation">
          {/* Close button at top of menu panel */}
          <div className="navbar__mobile-header">
            <Link to="/" className="navbar__logo" aria-label="FITPULSE Home" onClick={() => setMobileOpen(false)}>
              <Zap size={22} className="navbar__logo-icon" />
              <span className="navbar__logo-text">FITPULSE</span>
            </Link>
            <button
              className="navbar__mobile-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav>
            {navLinks.map((link) => (
              <div key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
                {link.children && (
                  <div className="navbar__mobile-sub">
                    {link.children.map((child) => (
                      <Link key={child.to} to={child.to} className="navbar__mobile-sublink">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Link to="/tools" className="btn btn-primary" style={{ margin: '1rem 1.5rem 1.5rem' }}>
            Find My Best Gear
          </Link>
        </div>
      )}
    </header>
  );
}

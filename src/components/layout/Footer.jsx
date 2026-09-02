import { Link } from 'react-router-dom';
import { Zap, Mail } from 'lucide-react';
import './Footer.css';

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function YoutubeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}


const footerLinks = {
  explore: [
    { label: 'Shop All', to: '/shop' },
    { label: 'Compare Products', to: '/compare' },
    { label: 'Best Picks', to: '/best' },
    { label: 'Buying Guides', to: '/guides' },
    { label: 'Reviews', to: '/reviews' },
  ],
  tools: [
    { label: 'BMI Calculator', to: '/tools/bmi-calculator' },
    { label: 'Calorie Calculator', to: '/tools/calorie-calculator' },
    { label: 'Protein Calculator', to: '/tools/protein-calculator' },
    { label: '1RM Calculator', to: '/tools/one-rep-max' },
    { label: 'All Tools', to: '/tools' },
  ],
  legal: [
    { label: 'About Us', to: '/about' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms & Conditions', to: '/terms' },
    { label: 'Affiliate Disclosure', to: '/affiliate-disclosure' },
    { label: 'Contact Us', to: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      {/* Affiliate Disclosure Banner */}
      <div className="footer__disclosure">
        <div className="container">
          <p className="text-caption text-muted" style={{ textAlign: 'center' }}>
            <strong style={{ color: 'var(--color-text-secondary)' }}>Affiliate Disclosure:</strong>{' '}
            As an Amazon Associate, FITPULSE earns from qualifying purchases. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.{' '}
            <Link to="/affiliate-disclosure" style={{ color: 'var(--accent)' }}>
              Full disclosure
            </Link>
          </p>
        </div>
      </div>

      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <Zap size={20} className="footer__logo-icon" />
                <span>FITPULSE</span>
              </Link>
              <p className="footer__tagline">Smarter Choices. Stronger Results.</p>
              <p className="footer__desc">
                Your trusted fitness product discovery platform. We research, compare, and
                recommend gear to help you train smarter.
              </p>

              {/* Social */}
              <div className="footer__social">
                <a
                  href="https://instagram.com/fitpulse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="FITPULSE on Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href="https://youtube.com/fitpulse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="FITPULSE on YouTube"
                >
                  <YoutubeIcon size={18} />
                </a>
                <a
                  href="https://facebook.com/fitpulse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="FITPULSE on Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
              </div>
            </div>

            {/* Explore */}
            <div className="footer__col">
              <h3 className="footer__col-title">Explore</h3>
              <ul className="footer__list">
                {footerLinks.explore.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="footer__col">
              <h3 className="footer__col-title">Fitness Tools</h3>
              <ul className="footer__list">
                {footerLinks.tools.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal + Newsletter */}
            <div className="footer__col">
              <h3 className="footer__col-title">Company</h3>
              <ul className="footer__list">
                {footerLinks.legal.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mini Newsletter */}
              <div className="footer__newsletter">
                <p className="footer__newsletter-label">
                  <Mail size={13} /> Get smarter picks
                </p>
                <form
                  className="footer__newsletter-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Analytics: track newsletter signup
                    if (typeof window.gtag === 'function') {
                      window.gtag('event', 'newsletter_signup', { location: 'footer' });
                    }
                    alert('Thanks! You\'re subscribed to FITPULSE updates.');
                    e.target.reset();
                  }}
                >
                  <input
                    type="email"
                    className="input"
                    placeholder="Enter your email"
                    required
                    aria-label="Email for newsletter"
                  />
                  <button type="submit" className="btn btn-primary btn-sm">
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <p className="text-caption text-muted">
            © {new Date().getFullYear()} FITPULSE. All rights reserved. As an Amazon Associate, FITPULSE earns from qualifying purchases. Product information is
            based on publicly available specifications, customer feedback, and comparative research.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Analytics: track newsletter signup
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'newsletter_signup', { location: 'homepage_section', email_domain: email.split('@')[1] });
    }
    setSubmitted(true);
  };

  return (
    <section className="newsletter-section" aria-labelledby="newsletter-heading">
      <div className="container">
        <div className="newsletter-inner card-glass">
          <div className="newsletter-icon">
            <Mail size={28} />
          </div>

          <div className="newsletter-content">
            <h2 id="newsletter-heading" className="text-heading-lg newsletter-title">
              Get Smarter Fitness Picks
            </h2>
            <p className="newsletter-sub text-body text-secondary">
              Get useful product recommendations, buying guides, fitness tools, and new deals
              delivered to your inbox. No spam, ever.
            </p>
          </div>

          {!submitted ? (
            <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
              <div className="newsletter-input-wrap">
                <Mail size={16} className="newsletter-input-icon" />
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for newsletter"
                  id="newsletter-email"
                />
              </div>
              <button type="submit" className="btn btn-primary newsletter-btn">
                Join FITPULSE <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <div className="newsletter-success">
              <span className="newsletter-success__icon">✓</span>
              <div>
                <p className="newsletter-success__title">You're in!</p>
                <p className="text-body-sm text-muted">
                  Thanks for subscribing. First picks coming your way soon.
                </p>
              </div>
            </div>
          )}

          <p className="newsletter-disclaimer text-caption text-muted">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

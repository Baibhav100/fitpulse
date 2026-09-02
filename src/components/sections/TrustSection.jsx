import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './TrustSection.css';

const criteria = [
  {
    icon: '📋',
    title: 'Features & Specifications',
    desc: 'We examine technical specifications, features, and how they compare across the category.',
  },
  {
    icon: '💰',
    title: 'Price vs. Value',
    desc: 'We consider the total value delivered relative to price, not just the cheapest or most expensive option.',
  },
  {
    icon: '🏗️',
    title: 'Build Quality',
    desc: 'Materials, construction quality, and expected durability based on available product information.',
  },
  {
    icon: '👥',
    title: 'User Feedback',
    desc: 'Aggregated user reviews and community sentiment from across trusted platforms.',
  },
  {
    icon: '🏷️',
    title: 'Brand Reputation',
    desc: 'Track record, customer support quality, warranty terms, and overall brand reliability.',
  },
  {
    icon: '🎯',
    title: 'Use Case Fit',
    desc: 'How well a product suits specific audiences — beginners, athletes, home gym users, and more.',
  },
];

export default function TrustSection() {
  return (
    <section className="section trust-section" aria-labelledby="trust-heading">
      <div className="container">
        <div className="trust-grid">
          {/* Left: How We Choose */}
          <div className="trust-left">
            <div className="section-label">Our Process</div>
            <h2 id="trust-heading" className="text-heading-xl">
              How We Choose Products
            </h2>
            <p className="text-body text-secondary" style={{ marginTop: '0.75rem', marginBottom: '2rem' }}>
              Every product featured on FITPULSE is evaluated based on a consistent set of
              criteria. Our goal is to save you time and help you make a confident purchase
              decision — not to push any particular product.
            </p>
            <p className="text-body-sm text-muted">
              <em>
                Product information is based on publicly available specifications, user feedback,
                and comparative research. We do not personally test every product.
              </em>
            </p>
            <Link to="/about" className="btn btn-secondary btn-sm" style={{ marginTop: '1.5rem' }}>
              About FITPULSE <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right: Criteria grid */}
          <div className="trust-criteria">
            {criteria.map((c) => (
              <div key={c.title} className="trust-criterion">
                <span className="trust-criterion__icon">{c.icon}</span>
                <div>
                  <h3 className="trust-criterion__title">{c.title}</h3>
                  <p className="trust-criterion__desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliate disclosure card */}
        <div className="trust-disclosure">
          <div className="trust-disclosure__icon">ℹ️</div>
          <div>
            <h3 className="trust-disclosure__title">Affiliate Disclosure</h3>
            <p className="trust-disclosure__text">
              Some links on FITPULSE are affiliate links. If you purchase through these links, we
              may earn a small commission at no additional cost to you. This helps us maintain and
              improve the platform. Our editorial content is not influenced by affiliate
              relationships.{' '}
              <Link to="/affiliate-disclosure" className="text-accent">
                Read our full disclosure →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

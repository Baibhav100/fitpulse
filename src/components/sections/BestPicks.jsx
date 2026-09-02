import { Link } from 'react-router-dom';
import { ArrowRight, Trophy } from 'lucide-react';
import { bestPicksCategories } from '../../data/products';
import './BestPicks.css';

export default function BestPicks() {
  return (
    <section className="section best-picks-section" aria-labelledby="best-picks-heading">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <Trophy size={12} /> Editorial Picks
          </div>
          <h2 id="best-picks-heading" className="text-heading-xl">
            Best Fitness Gear Right Now
          </h2>
          <p className="text-body text-secondary" style={{ maxWidth: 520, margin: '0.75rem auto 0' }}>
            Curated buying lists organized by category so you can find the top-researched option for
            your needs — quickly.
          </p>
        </div>

        <div className="best-picks-grid">
          {bestPicksCategories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/best#${cat.id}`}
              className="best-pick-card"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="best-pick-card__icon" aria-hidden="true">{cat.icon}</span>
              <div className="best-pick-card__body">
                <h3 className="best-pick-card__label">{cat.label}</h3>
                <span className="best-pick-card__arrow">
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
          <Link to="/best" className="btn btn-primary btn-lg">
            See All Best Picks <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

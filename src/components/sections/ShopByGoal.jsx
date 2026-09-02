import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { goalCategories } from '../../data/categories';
import './ShopByGoal.css';

export default function ShopByGoal() {
  return (
    <section className="section shop-by-goal" aria-labelledby="goal-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Shop by Goal</div>
          <h2 id="goal-heading" className="text-heading-xl">
            What Are You Training For?
          </h2>
          <p className="text-body-lg text-secondary" style={{ maxWidth: 520, marginTop: '0.75rem' }}>
            Browse fitness gear curated for your specific goals — whether you're building muscle,
            running further, or recovering smarter.
          </p>
        </div>

        <div className="goal-grid">
          {goalCategories.map((cat, i) => (
            <Link
              key={cat.id}
              to={cat.slug}
              className="goal-card"
              style={{ animationDelay: `${i * 0.05}s` }}
              aria-label={`Shop ${cat.label}`}
            >
              <div className="goal-card__image-wrap">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="goal-card__image"
                  loading="lazy"
                />
                <div className="goal-card__overlay" />
              </div>
              <div className="goal-card__content">
                <span className="goal-card__icon" aria-hidden="true">{cat.icon}</span>
                <h3 className="goal-card__label">{cat.label}</h3>
                <p className="goal-card__desc">{cat.description}</p>
                <span className="goal-card__cta">
                  Shop Now <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

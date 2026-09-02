import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { getFeaturedGuides } from '../../data/guides';
import './BuyingGuidesPreview.css';

export default function BuyingGuidesPreview() {
  const guides = getFeaturedGuides();

  return (
    <section className="section guides-preview-section" aria-labelledby="guides-preview-heading">
      <div className="container">
        <div className="section-header flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-label">
              <BookOpen size={12} /> Buying Guides
            </div>
            <h2 id="guides-preview-heading" className="text-heading-xl">
              Research Before You Buy
            </h2>
          </div>
          <Link to="/guides" className="btn btn-secondary btn-sm hide-mobile">
            All Guides <ArrowRight size={14} />
          </Link>
        </div>

        <div className="guides-grid">
          {/* Feature guide — large */}
          {guides[0] && (
            <Link to={`/guides/${guides[0].slug}`} className="guide-card guide-card--featured">
              <div className="guide-card__image-wrap">
                <img
                  src={guides[0].image}
                  alt={guides[0].title}
                  className="guide-card__image"
                  loading="lazy"
                />
                <div className="guide-card__overlay" />
              </div>
              <div className="guide-card__content">
                <span className="badge badge-accent guide-card__cat">{guides[0].category}</span>
                <h3 className="guide-card__title text-heading-md">{guides[0].title}</h3>
                <p className="guide-card__excerpt">{guides[0].excerpt}</p>
                <span className="guide-card__meta text-caption text-muted">{guides[0].readTime}</span>
              </div>
            </Link>
          )}

          {/* Remaining guides — compact */}
          <div className="guides-secondary">
            {guides.slice(1, 4).map((guide) => (
              <Link
                key={guide.id}
                to={`/guides/${guide.slug}`}
                className="guide-card guide-card--compact"
              >
                <div className="guide-card__image-wrap">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="guide-card__image"
                    loading="lazy"
                  />
                  <div className="guide-card__overlay" />
                </div>
                <div className="guide-card__content">
                  <span className="badge badge-default guide-card__cat">{guide.category}</span>
                  <h3 className="guide-card__title">{guide.title}</h3>
                  <span className="guide-card__meta text-caption text-muted">{guide.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
          <Link to="/guides" className="btn btn-secondary">
            Browse All Buying Guides <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

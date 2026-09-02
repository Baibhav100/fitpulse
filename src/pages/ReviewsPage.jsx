import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle, XCircle, Star } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';
import './ReviewsPage.css';

// Reviews are structured editorial content based on research
const reviews = products.map((p) => ({
  ...p,
  verdict: `The ${p.name} is a strong option for ${p.bestFor?.[0] ?? 'fitness enthusiasts'}. ${
    p.pros?.[0] ?? 'It offers good value'
  }. Based on product specifications, available information, and comparative research.`,
  researchNote:
    'This review is based on product specifications, publicly available user feedback, and comparative research. We have not personally tested this product.',
}));

function ReviewCard({ review }) {
  const handleAffiliate = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'affiliate_click', { product_id: review.id, location: 'reviews_page' });
    }
    window.open(review.affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="review-card card" id={`review-${review.slug}`}>
      <div className="review-card__image-wrap">
        <img src={review.image} alt={review.name} className="review-card__image" loading="lazy" />
      </div>

      <div className="review-card__body">
        <div className="review-card__meta">
          <span className="badge badge-default">{review.category?.replace(/-/g, ' ')}</span>
          <span className="badge badge-default">{review.brand}</span>
          {review.priceRange && (
            <span className={`badge badge-${review.priceRange === 'Budget' ? 'success' : review.priceRange === 'Premium' ? 'accent' : 'default'}`}>
              {review.priceRange}
            </span>
          )}
        </div>

        <h2 className="review-card__name text-heading-sm">{review.name}</h2>
        <p className="text-body text-secondary">{review.shortDescription}</p>

        {/* Who it's for / not for */}
        <div className="review-who-grid">
          <div className="review-who review-who--for">
            <p className="review-who__label"><CheckCircle size={13} /> Best For</p>
            <ul>
              {review.bestFor?.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
          <div className="review-who review-who--avoid">
            <p className="review-who__label"><XCircle size={13} /> Not Ideal For</p>
            <ul>
              {review.notIdealFor?.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>

        {/* Pros / Cons */}
        <div className="review-proscons-grid">
          <div>
            <p className="review-proscons__label">Pros</p>
            <ul className="review-proscons__list review-proscons__list--pros">
              {review.pros?.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
          <div>
            <p className="review-proscons__label">Cons</p>
            <ul className="review-proscons__list review-proscons__list--cons">
              {review.cons?.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>

        {/* Verdict */}
        <div className="review-verdict">
          <p className="review-verdict__label"><Star size={13} fill="currentColor" /> Editorial Verdict</p>
          <p className="review-verdict__text">{review.verdict}</p>
        </div>

        {/* Research note */}
        <p className="review-research-note text-caption text-muted">{review.researchNote}</p>

        {/* CTA */}
        <div className="review-cta-row">
          <button
            className="btn btn-primary"
            onClick={handleAffiliate}
            data-affiliate="true"
            aria-label={`${review.cta} — ${review.name} on ${review.merchant}`}
          >
            {review.cta} on {review.merchant} <ExternalLink size={14} />
          </button>
          <Link to="/compare" className="btn btn-secondary btn-sm">
            Compare Alternatives
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ReviewsPage() {
  return (
    <main className="reviews-page">
      <div className="reviews-hero">
        <div className="container">
          <div className="section-label">Product Reviews</div>
          <h1 className="text-heading-xl">Fitness Product Reviews</h1>
          <p className="text-body text-secondary" style={{ maxWidth: 540, marginTop: '0.5rem' }}>
            In-depth product reviews based on specifications, comparative analysis, and available
            user feedback. We clearly state when a product has not been personally tested.
          </p>
          <div className="review-disclaimer-pill">
            ℹ️ Reviews are based on product specifications, customer feedback, and comparative
            research — not personal testing, unless explicitly stated.
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBlock: 'var(--space-12)' }}>
        <div className="reviews-list">
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>

        <p className="text-caption text-muted" style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
          Some links are affiliate links.{' '}
          <Link to="/affiliate-disclosure" className="text-accent">Read our full disclosure.</Link>
        </p>
      </div>
    </main>
  );
}

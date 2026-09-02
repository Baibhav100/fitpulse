import { ExternalLink, Tag } from 'lucide-react';
import './ProductCard.css';

/**
 * ProductCard — core reusable product display component.
 * All affiliate CTAs open in a new tab.
 * Affiliate clicks are tracked via data attributes for analytics.
 */
export default function ProductCard({
  product,
  showCompare = false,
  onCompare,
  compareSelected = false,
  variant = 'default', // 'default' | 'compact' | 'featured'
}) {
  const handleAffiliateClick = () => {
    // Analytics: track affiliate outbound click
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'affiliate_click', {
        product_id: product.id,
        product_name: product.name,
        merchant: product.merchant,
        destination: product.affiliateUrl,
      });
    }
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <article
      className={`product-card product-card--${variant} ${compareSelected ? 'product-card--selected' : ''}`}
      data-product-id={product.id}
    >
      {/* Image */}
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={`${product.name} — ${product.shortDescription}`}
          className="product-card__image"
          loading="lazy"
          decoding="async"
        />
        {/* Category badge */}
        <span className="product-card__category badge badge-default">
          {product.subcategory?.replace(/-/g, ' ')}
        </span>
        {/* Trending badge */}
        {product.trending && (
          <span className="product-card__trending badge badge-accent">
            Trending
          </span>
        )}
      </div>

      {/* Body */}
      <div className="product-card__body">
        <div className="product-card__brand text-label text-muted">{product.brand}</div>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.shortDescription}</p>

        {/* Best For */}
        {product.bestFor && product.bestFor.length > 0 && (
          <div className="product-card__best-for">
            <Tag size={11} />
            <span>Best for: {product.bestFor.slice(0, 2).join(', ')}</span>
          </div>
        )}

        {/* Key Features (compact: hidden) */}
        {variant !== 'compact' && product.keyFeatures && (
          <ul className="product-card__features">
            {product.keyFeatures.slice(0, 3).map((f, i) => (
              <li key={i} className="product-card__feature">
                <span className="product-card__feature-dot" />
                {f}
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        <div className="product-card__footer">
          {/* Price Range */}
          {product.priceRange && (
            <span className={`product-card__price badge badge-${
              product.priceRange === 'Budget' ? 'success' :
              product.priceRange === 'Premium' ? 'accent' : 'default'
            }`}>
              {product.priceRange}
            </span>
          )}

          {/* Actions */}
          <div className="product-card__actions">
            {showCompare && (
              <button
                className={`btn btn-sm btn-secondary product-card__compare-btn ${compareSelected ? 'active' : ''}`}
                onClick={() => onCompare && onCompare(product)}
                aria-pressed={compareSelected}
              >
                {compareSelected ? '✓ Added' : 'Compare'}
              </button>
            )}
            <button
              className="btn btn-sm btn-affiliate product-card__cta"
              onClick={handleAffiliateClick}
              data-affiliate="true"
              data-merchant={product.merchant}
              aria-label={`${product.cta} — ${product.name} on ${product.merchant}`}
            >
              {product.cta}
              <ExternalLink size={13} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { guides } from '../data/guides';
import { products } from '../data/products';
import './BuyingGuidesPage.css';

export default function BuyingGuidesPage() {
  return (
    <main className="guides-page">
      <div className="guides-hero">
        <div className="container">
          <div className="section-label"><BookOpen size={12} /> In-Depth Guides</div>
          <h1 className="text-heading-xl">Fitness Buying Guides</h1>
          <p className="text-body text-secondary" style={{ maxWidth: 540, marginTop: '0.5rem' }}>
            Research-backed buying guides to help you make confident fitness product decisions.
            Every guide includes genuine advice before any product recommendations.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBlock: 'var(--space-12)' }}>
        <div className="guides-list">
          {guides.map((guide) => {
            const guideProducts = guide.relatedProducts
              .map((id) => products.find((p) => p.id === id))
              .filter(Boolean);
            return (
              <article key={guide.id} className="guide-article card">
                <div className="guide-article__image-wrap">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="guide-article__image"
                    loading="lazy"
                  />
                </div>
                <div className="guide-article__body">
                  <div className="guide-article__meta">
                    <span className="badge badge-default">{guide.category}</span>
                    <span className="guide-article__read-time">
                      <Clock size={12} /> {guide.readTime}
                    </span>
                  </div>
                  <h2 className="guide-article__title text-heading-sm">
                    <Link to={`/guides/${guide.slug}`} className="guide-article__title-link">
                      {guide.title}
                    </Link>
                  </h2>
                  <p className="guide-article__excerpt text-body text-secondary">
                    {guide.excerpt}
                  </p>

                  {/* Related Products Preview */}
                  {guideProducts.length > 0 && (
                    <div className="guide-article__products">
                      <p className="text-label text-muted" style={{ marginBottom: 'var(--space-3)' }}>
                        Featured Products
                      </p>
                      <div className="guide-article__products-list">
                        {guideProducts.map((p) => (
                          <div key={p.id} className="guide-product-chip">
                            <img src={p.image} alt={p.name} className="guide-product-chip__img" />
                            <span className="guide-product-chip__name">{p.name}</span>
                            <button
                              className="btn btn-sm btn-affiliate guide-product-chip__cta"
                              onClick={() => {
                                if (typeof window.gtag === 'function') {
                                  window.gtag('event', 'affiliate_click', { product_id: p.id, location: 'guides_page' });
                                }
                                window.open(p.affiliateUrl, '_blank', 'noopener,noreferrer');
                              }}
                              data-affiliate="true"
                              aria-label={`${p.cta} — ${p.name}`}
                            >
                              {p.cta}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link to={`/guides/${guide.slug}`} className="btn btn-secondary btn-sm guide-article__btn">
                    Read Guide <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Disclosure */}
        <p className="text-caption text-muted" style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
          Some links in our buying guides are affiliate links.{' '}
          <Link to="/affiliate-disclosure" className="text-accent">See our disclosure.</Link>
        </p>
      </div>
    </main>
  );
}

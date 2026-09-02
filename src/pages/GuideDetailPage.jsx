import { useParams, Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar, CheckCircle2, ChevronRight, Star, ExternalLink, ShieldCheck, HelpCircle } from 'lucide-react';
import { guides, getGuideBySlug } from '../data/guides';
import { products } from '../data/products';
import './GuideDetailPage.css';

export default function GuideDetailPage() {
  const { slug } = useParams();
  const guide = getGuideBySlug(slug) || guides[0];

  const featuredProducts = (guide.relatedProducts || [])
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  const handleAffiliate = (p) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'affiliate_click', {
        product_id: p.id,
        guide_slug: guide.slug,
        location: 'guide_detail',
      });
    }
    window.open(p.affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="guide-detail-page">
      {/* Hero Header */}
      <header className="guide-detail-hero">
        <div className="container">
          <nav className="guide-breadcrumb" aria-label="Breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/guides">Guides</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--color-text-primary)' }}>{guide.title}</span>
          </nav>

          <span className="badge badge-accent" style={{ marginBottom: 'var(--space-3)' }}>
            {guide.category}
          </span>
          <h1 className="text-heading-xl" style={{ maxWidth: 850, marginTop: 'var(--space-2)' }}>
            {guide.title}
          </h1>
          <p className="text-body-lg text-secondary" style={{ maxWidth: 720, marginTop: 'var(--space-3)' }}>
            {guide.excerpt}
          </p>

          <div className="guide-meta-row">
            <span className="guide-meta-item">
              <Calendar size={14} /> Updated September 2026
            </span>
            <span>•</span>
            <span className="guide-meta-item">
              <Clock size={14} /> {guide.readTime}
            </span>
            <span>•</span>
            <span className="guide-meta-item">
              <ShieldCheck size={14} color="var(--color-success)" /> Editorial Research & Verified Specs
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="container" style={{ paddingBlock: 'var(--space-10)' }}>
        <div className="guide-featured-img-wrap">
          <img src={guide.image} alt={guide.title} className="guide-featured-img" />
        </div>

        <div className="guide-layout">
          {/* Article Body */}
          <article className="guide-article-body">
            {/* Takeaways Box */}
            <div className="guide-takeaways-box">
              <h3 className="guide-takeaways-title">
                <CheckCircle2 size={18} /> Quick Buyer Summary
              </h3>
              <ul className="guide-takeaways-list">
                <li>Identify your primary training goal before committing budget to specialized equipment.</li>
                <li>Evaluate floor space, ceiling clearance, and storage ease before purchasing.</li>
                <li>Prioritize durability, warranty coverage, and trusted build materials over gimmicky features.</li>
              </ul>
            </div>

            <h2>Why Choosing the Right Gear Matters</h2>
            <p>
              Investing in fitness equipment is an investment in your physical health, daily energy, and long-term habits.
              However, millions of fitness enthusiasts waste hard-earned money each year on low-quality products that break
              quickly or take up valuable room in their homes.
            </p>
            <p>
              In this comprehensive guide, we dissect specifications, build quality, usability feedback, and pricing tiers
              to help you choose the best equipment tailored specifically to your space and fitness objectives.
            </p>

            <h2>Top Recommended Products</h2>
            <p>
              Based on extensive comparative analysis and user satisfaction data, here are our top picks for this category:
            </p>

            {featuredProducts.map((product, idx) => (
              <section key={product.id} className="guide-product-highlight" id={`product-${product.id}`}>
                <div>
                  <img src={product.image} alt={product.name} className="guide-product-highlight__img" />
                  <span className="badge badge-default" style={{ marginTop: 'var(--space-2)' }}>
                    Rank #{idx + 1} Pick
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2" style={{ flexWrap: 'wrap' }}>
                    <span className="text-label text-muted">{product.brand}</span>
                    <span className={`badge badge-${product.priceRange === 'Budget' ? 'success' : product.priceRange === 'Premium' ? 'accent' : 'default'}`}>
                      {product.priceRange}
                    </span>
                  </div>
                  <h3 style={{ marginBlock: 'var(--space-2)' }}>{product.name}</h3>
                  <p className="text-body-sm text-secondary">{product.description || product.shortDescription}</p>

                  <div style={{ marginBlock: 'var(--space-4)' }}>
                    <p className="text-label text-muted" style={{ marginBottom: '4px' }}>Key Highlights</p>
                    <ul style={{ paddingLeft: '1.2rem', fontSize: '0.875rem' }}>
                      {product.keyFeatures?.slice(0, 3).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-3" style={{ marginTop: 'var(--space-4)', flexWrap: 'wrap' }}>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleAffiliate(product)}
                      data-affiliate="true"
                    >
                      {product.cta} on {product.merchant} <ExternalLink size={13} />
                    </button>
                    <Link to="/compare" className="btn btn-secondary btn-sm">
                      Compare Specs
                    </Link>
                  </div>
                </div>
              </section>
            ))}

            <h2>Essential Buyer's Checklist</h2>
            <p>Before making a final purchase decision, always run through this essential evaluation checklist:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: 'var(--space-6)' }}>
              <li><strong>Dimensions & Space:</strong> Measure your workout zone twice. Account for operating room during dynamic exercises.</li>
              <li><strong>Weight Capacities:</strong> Ensure load limits exceed your body weight and projected strength progressions.</li>
              <li><strong>Maintenance & Warranty:</strong> Look for at least 1-2 years of manufacturer warranty and readily available customer support.</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <div className="guide-faq-box">
              <p className="guide-faq-question">How were these recommendations selected?</p>
              <p className="guide-faq-answer">
                Our picks are selected using thorough specification research, verified customer sentiment across retail platforms, and comparative value analysis.
              </p>
            </div>
            <div className="guide-faq-box">
              <p className="guide-faq-question">Are prices and availability accurate?</p>
              <p className="guide-faq-answer">
                Prices and availability fluctuate frequently on merchant platforms like Amazon. Click through to the merchant to view up-to-the-minute pricing.
              </p>
            </div>

            {/* FTC / Amazon Disclaimer in Guide */}
            <div style={{ marginTop: 'var(--space-10)', padding: 'var(--space-4)', background: 'var(--color-bg-elevated)', borderRadius: 'var(--radius-md)' }}>
              <p className="text-caption text-muted">
                <strong>Affiliate Notice:</strong> FITPULSE is reader-supported. As an Amazon Associate, FITPULSE earns from qualifying purchases. When you purchase through links in this guide, we may earn a small referral commission at no additional cost to you.
              </p>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="guide-sidebar">
            <div className="guide-sidebar-card">
              <h3 className="guide-sidebar-title">
                <BookOpen size={16} color="var(--accent)" /> On This Page
              </h3>
              <ul className="guide-toc-list">
                <li><a href="#summary">Quick Summary</a></li>
                <li><a href="#why-it-matters">Why It Matters</a></li>
                <li><a href="#top-picks">Recommended Products</a></li>
                <li><a href="#checklist">Buyer's Checklist</a></li>
                <li><a href="#faqs">Frequently Asked Questions</a></li>
              </ul>
            </div>

            <div className="guide-sidebar-card" style={{ background: 'var(--accent-dim)', borderColor: 'rgba(184, 244, 0, 0.2)' }}>
              <h3 className="guide-sidebar-title" style={{ color: 'var(--accent)' }}>
                <Star size={16} /> Need Custom Help?
              </h3>
              <p className="text-body-sm text-secondary" style={{ marginBottom: 'var(--space-4)' }}>
                Use our interactive fitness calculators and product comparison tool to find the exact setup for your physique goals.
              </p>
              <Link to="/compare" className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                Launch Comparison Tool
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { comparisonSets } from '../../data/products';
import './ComparisonSection.css';

export default function ComparisonSection() {
  const comparison = comparisonSets['adjustable-dumbbells'];

  const handleAffiliate = (product) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'affiliate_click', {
        product_id: product.id,
        location: 'comparison_table',
        destination: product.affiliateUrl,
      });
    }
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section comparison-section" aria-labelledby="comparison-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Product Comparison</div>
          <h2 id="comparison-heading" className="text-heading-xl">
            {comparison.title}
          </h2>
          <p className="text-body text-secondary" style={{ maxWidth: 520, marginTop: '0.75rem' }}>
            {comparison.subtitle}
          </p>
        </div>

        <div className="table-responsive">
          <table className="comparison-table" aria-label="Adjustable dumbbell comparison">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price (approx.)</th>
                <th scope="col">Weight Range</th>
                <th scope="col">Material</th>
                <th scope="col">Space Required</th>
                <th scope="col">Best For</th>
                <th scope="col">Our Verdict</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {comparison.products.map((p) => (
                <tr key={p.id}>
                  <td className="comparison-table__name">{p.name}</td>
                  <td>
                    <span className="badge badge-default">{p.price}</span>
                  </td>
                  <td>{p.weightRange}</td>
                  <td>{p.material}</td>
                  <td>
                    <span
                      className={`badge badge-${
                        p.spaceRequired === 'Low' ? 'success' : 'default'
                      }`}
                    >
                      {p.spaceRequired}
                    </span>
                  </td>
                  <td>{p.bestFor}</td>
                  <td className="comparison-table__verdict">{p.verdict}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-affiliate"
                      onClick={() => handleAffiliate(p)}
                      data-affiliate="true"
                      aria-label={`${p.cta} for ${p.name}`}
                    >
                      {p.cta} <ExternalLink size={12} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="comparison-footer">
          <p className="text-caption text-muted">
            Prices are approximate and subject to change. Always verify current pricing on the
            merchant's website.
          </p>
          <Link to="/compare" className="btn btn-secondary btn-sm">
            Full Comparison Tool <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

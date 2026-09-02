import { useState } from 'react';
import { ExternalLink, Plus, Trash2 } from 'lucide-react';
import { products, comparisonSets } from '../data/products';
import './ComparePage.css';

const comparisonFields = [
  { key: 'brand', label: 'Brand' },
  { key: 'category', label: 'Category' },
  { key: 'priceRange', label: 'Price Range' },
  { key: 'shortDescription', label: 'Description' },
  { key: 'bestFor', label: 'Best For', render: (v) => Array.isArray(v) ? v.join(', ') : v },
  { key: 'notIdealFor', label: 'Not Ideal For', render: (v) => Array.isArray(v) ? v.join(', ') : v },
  { key: 'pros', label: 'Pros', render: (v) => Array.isArray(v) ? v.join(' · ') : v },
  { key: 'cons', label: 'Cons', render: (v) => Array.isArray(v) ? v.join(' · ') : v },
];

export default function ComparePage() {
  const [selected, setSelected] = useState([products[0], products[3]]); // default: 2 products

  const addProduct = (id) => {
    if (selected.length >= 4) return;
    const p = products.find((x) => x.id === id);
    if (p && !selected.find((s) => s.id === id)) {
      setSelected([...selected, p]);
    }
  };

  const removeProduct = (id) => {
    setSelected(selected.filter((p) => p.id !== id));
  };

  const handleAffiliate = (product) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'affiliate_click', {
        product_id: product.id,
        location: 'compare_page',
        destination: product.affiliateUrl,
      });
    }
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  const availableToAdd = products.filter((p) => !selected.find((s) => s.id === p.id));

  return (
    <main className="compare-page">
      <div className="compare-hero">
        <div className="container">
          <div className="section-label">Side-by-Side</div>
          <h1 className="text-heading-xl">Compare Fitness Products</h1>
          <p className="text-body text-secondary" style={{ maxWidth: 520, marginTop: '0.5rem' }}>
            Select up to 4 products to compare specifications, pros, cons, and find the best
            option for your needs.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBlock: 'var(--space-10)' }}>
        {/* Add Products row */}
        <div className="compare-add-row">
          <p className="text-body-sm text-muted">
            {selected.length}/4 products selected
          </p>
          {selected.length < 4 && (
            <div className="compare-add">
              <Plus size={14} />
              <select
                className="input compare-add-select"
                onChange={(e) => { addProduct(e.target.value); e.target.value = ''; }}
                defaultValue=""
                aria-label="Add product to comparison"
              >
                <option value="" disabled>Add a product...</option>
                {availableToAdd.map((p) => (
                  <option key={p.id} value={p.id}>{p.brand} — {p.name}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {selected.length < 2 ? (
          <div className="compare-empty">
            <p>Select at least 2 products above to start comparing.</p>
          </div>
        ) : (
          <div className="table-responsive compare-table-wrap">
            <table className="compare-table" aria-label="Product comparison table">
              <thead>
                <tr>
                  <th scope="col" className="compare-table__attr-col">Feature</th>
                  {selected.map((p) => (
                    <th key={p.id} scope="col" className="compare-table__product-col">
                      <div className="compare-product-header">
                        <img src={p.image} alt={p.name} className="compare-product-img" loading="lazy" />
                        <div>
                          <p className="compare-product-brand text-label text-muted">{p.brand}</p>
                          <p className="compare-product-name">{p.name}</p>
                        </div>
                        <button
                          className="compare-remove-btn"
                          onClick={() => removeProduct(p.id)}
                          aria-label={`Remove ${p.name} from comparison`}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Image row */}
                <tr>
                  <td className="compare-attr">Affiliate CTA</td>
                  {selected.map((p) => (
                    <td key={p.id} style={{ verticalAlign: 'middle' }}>
                      <button
                        className="btn btn-sm btn-affiliate"
                        onClick={() => handleAffiliate(p)}
                        data-affiliate="true"
                        aria-label={`${p.cta} for ${p.name}`}
                      >
                        {p.cta} <ExternalLink size={12} />
                      </button>
                    </td>
                  ))}
                </tr>

                {/* Dynamic fields */}
                {comparisonFields.map((field) => (
                  <tr key={field.key}>
                    <td className="compare-attr">{field.label}</td>
                    {selected.map((p) => {
                      const val = p[field.key];
                      const display = field.render ? field.render(val) : val;
                      return (
                        <td key={p.id}>
                          {display || <span className="text-muted">—</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}

                {/* Specs rows */}
                {selected.some((p) => p.specs) && (
                  <tr className="compare-section-row">
                    <td colSpan={selected.length + 1}>Specifications</td>
                  </tr>
                )}
                {(() => {
                  const specKeys = [...new Set(selected.flatMap((p) => Object.keys(p.specs || {})))];
                  return specKeys.map((key) => (
                    <tr key={`spec-${key}`}>
                      <td className="compare-attr" style={{ textTransform: 'capitalize' }}>
                        {key.replace(/([A-Z])/g, ' $1')}
                      </td>
                      {selected.map((p) => (
                        <td key={p.id}>{p.specs?.[key] || <span className="text-muted">—</span>}</td>
                      ))}
                    </tr>
                  ));
                })()}
              </tbody>
            </table>
          </div>
        )}

        {/* Disclosure */}
        <p className="text-caption text-muted" style={{ marginTop: 'var(--space-6)', textAlign: 'center' }}>
          Prices are approximate and subject to change. Affiliate links open merchant websites.
          FITPULSE does not process payments.
        </p>
      </div>
    </main>
  );
}

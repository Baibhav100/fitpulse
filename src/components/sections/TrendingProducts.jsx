import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../ui/ProductCard';
import { getTrendingProducts } from '../../data/products';
import './TrendingProducts.css';

export default function TrendingProducts() {
  const products = getTrendingProducts();

  return (
    <section className="section trending-section" aria-labelledby="trending-heading">
      <div className="container">
        <div className="section-header flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-label">Trending Now</div>
            <h2 id="trending-heading" className="text-heading-xl">
              Top-Researched Fitness Products
            </h2>
          </div>
          <Link to="/shop" className="btn btn-secondary btn-sm">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-auto-fill-sm">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} showCompare={false} />
          ))}
        </div>

        {/* Disclosure */}
        <p className="trending-disclosure text-caption text-muted" style={{ marginTop: 'var(--space-6)', textAlign: 'center' }}>
          Product information is based on publicly available specifications and comparative research.
          Affiliate links are marked with the merchant name.
        </p>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Star } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products, bestPicksCategories } from '../data/products';
import './BestPicksPage.css';

const rankings = [
  { id: 'best-overall',    label: 'Best Overall',           icon: '🏆', productIds: ['adj-dumbbell-bowflex-552', 'tracker-garmin-forerunner-255'] },
  { id: 'best-budget',     label: 'Best Budget',            icon: '💰', productIds: ['pull-up-bar-iron-gym', 'resistance-bands-rogue'] },
  { id: 'best-premium',    label: 'Best Premium',           icon: '💎', productIds: ['massage-gun-theragun-prime', 'yoga-mat-manduka-pro'] },
  { id: 'best-beginners',  label: 'Best for Beginners',     icon: '🌱', productIds: ['resistance-bands-rogue', 'foam-roller-trigger-point'] },
  { id: 'best-home',       label: 'Best for Home Gym',      icon: '🏠', productIds: ['adj-dumbbell-bowflex-552', 'treadmill-nordictrack-t75'] },
  { id: 'best-running',    label: 'Best for Running',       icon: '🏃', productIds: ['running-shoes-brooks-ghost', 'tracker-garmin-forerunner-255'] },
];

export default function BestPicksPage() {
  return (
    <main className="best-picks-page">
      <div className="best-picks-hero">
        <div className="container">
          <div className="section-label">
            <Trophy size={12} /> Editorial Rankings
          </div>
          <h1 className="text-heading-xl">Best Fitness Products</h1>
          <p className="text-body text-secondary" style={{ maxWidth: 540, marginTop: '0.5rem' }}>
            Curated product rankings organized by use case. Based on specifications, user
            feedback, and comparative research.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBlock: 'var(--space-12)' }}>
        {/* Category quick nav */}
        <div className="best-picks-nav">
          {bestPicksCategories.map((cat) => (
            <Link key={cat.id} to={`/shop?category=${cat.id}`} className="tag">
              {cat.icon} {cat.label}
            </Link>
          ))}
        </div>

        {/* Ranking sections */}
        {rankings.map((rank) => {
          const rankProducts = rank.productIds.map((id) => products.find((p) => p.id === id)).filter(Boolean);
          return (
            <section key={rank.id} id={rank.id} className="ranking-section">
              <div className="ranking-header">
                <span className="ranking-icon">{rank.icon}</span>
                <div>
                  <h2 className="text-heading-lg ranking-title">{rank.label}</h2>
                  <p className="text-body-sm text-muted">
                    Based on specifications, comparative research, and user feedback.
                  </p>
                </div>
              </div>
              <div className="grid grid-auto-fill-md">
                {rankProducts.map((product, i) => (
                  <div key={product.id} className="ranking-product-wrap">
                    <div className="ranking-badge">
                      <Star size={10} fill="currentColor" />
                      #{i + 1} Pick
                    </div>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              <div className="divider" />
            </section>
          );
        })}

        <p className="text-caption text-muted" style={{ textAlign: 'center' }}>
          Rankings are editorial suggestions based on product research. Affiliate links help
          support FITPULSE at no cost to you.{' '}
          <Link to="/affiliate-disclosure" className="text-accent">Disclosure →</Link>
        </p>
      </div>
    </main>
  );
}

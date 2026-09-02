import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero — FITPULSE">
      {/* Background Image */}
      <div className="hero__bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85"
          alt="Athlete training in a premium home gym"
          className="hero__bg-img"
          fetchpriority="high"
        />
        <div className="hero__bg-overlay" />
      </div>

      {/* Content */}
      <div className="hero__content container">
        {/* Trust pill */}
        <div className="hero__trust-pill animate-fade-up">
          <span className="hero__trust-dot" aria-hidden="true" />
          Independent recommendations · Product research · Updated regularly
        </div>

        <h1 className="hero__headline text-display animate-fade-up delay-1">
          Find Fitness Gear That{' '}
          <span className="text-gradient">Actually Fits</span>{' '}
          Your Goals.
        </h1>

        <p className="hero__sub animate-fade-up delay-2">
          Discover, compare, and choose smarter fitness products for your workouts, home gym,
          running, recovery, and everyday performance.
        </p>

        {/* CTAs */}
        <div className="hero__ctas animate-fade-up delay-3">
          <Link to="/tools" className="btn btn-primary btn-lg hero__cta-primary">
            Find My Best Gear
            <ArrowRight size={18} />
          </Link>
          <Link to="/best" className="btn btn-secondary btn-lg">
            Explore Best Picks
          </Link>
        </div>

        {/* Stats row */}
        <div className="hero__stats animate-fade-up delay-4">
          {[
            { value: '200+', label: 'Products Researched' },
            { value: '15+', label: 'Categories Covered' },
            { value: '9', label: 'Fitness Calculators' },
          ].map((s) => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="hero__scroll-cue animate-fade-up delay-5" aria-hidden="true">
          <ChevronRight size={16} style={{ transform: 'rotate(90deg)' }} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}

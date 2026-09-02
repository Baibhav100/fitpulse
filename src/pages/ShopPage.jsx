import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';
import { shopCategories, priceFilters, experienceFilters } from '../data/categories';
import './ShopPage.css';

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activePrice, setActivePrice] = useState('all');
  const [activeExp, setActiveExp] = useState('all');
  const [compareList, setCompareList] = useState([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase());
      const matchCat =
        activeCategory === 'all' ||
        p.category === activeCategory ||
        p.subcategory === activeCategory ||
        p.tags?.includes(activeCategory) ||
        p.goals?.includes(activeCategory) ||
        (activeCategory === 'gym-accessories' && (p.category === 'accessories' || p.tags?.includes('accessories'))) ||
        (activeCategory === 'accessories' && (p.subcategory === 'gym-accessories' || p.tags?.includes('gym-accessories')));
      const matchPrice = activePrice === 'all' || p.priceRange?.toLowerCase() === activePrice;
      const matchExp =
        activeExp === 'all' || p.experience?.includes(activeExp);
      return matchSearch && matchCat && matchPrice && matchExp;
    });
  }, [search, activeCategory, activePrice, activeExp]);

  const handleCompare = (product) => {
    setCompareList((prev) => {
      if (prev.find((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id);
      }
      if (prev.length >= 4) {
        alert('You can compare up to 4 products at a time.');
        return prev;
      }
      return [...prev, product];
    });
  };

  const clearFilters = () => {
    setSearch('');
    setActiveCategory('all');
    setActivePrice('all');
    setActiveExp('all');
  };

  const hasFilters = search || activeCategory !== 'all' || activePrice !== 'all' || activeExp !== 'all';

  return (
    <main className="shop-page">
      {/* Page Header */}
      <div className="shop-hero">
        <div className="container">
          <div className="section-label">Product Discovery</div>
          <h1 className="text-heading-xl">Shop Fitness Gear</h1>
          <p className="text-body text-secondary" style={{ maxWidth: 520, marginTop: '0.5rem' }}>
            Browse our curated selection of fitness products across all categories. Every item
            includes an external link to the merchant — we don't sell directly.
          </p>

          {/* Search */}
          <div className="shop-search-wrap">
            <Search size={18} className="shop-search-icon" />
            <input
              type="search"
              className="shop-search"
              placeholder="Search products, brands, categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search products"
              id="shop-search"
            />
            {search && (
              <button className="shop-search-clear" onClick={() => setSearch('')} aria-label="Clear search">
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container shop-layout">
        {/* Sidebar Filters */}
        <aside className={`shop-filters ${filtersOpen ? 'shop-filters--open' : ''}`} aria-label="Product filters">
          <div className="shop-filters__header">
            <h2 className="text-heading-sm">Filters</h2>
            {hasFilters && (
              <button className="btn btn-ghost btn-sm" onClick={clearFilters}>
                Clear all
              </button>
            )}
          </div>

          {/* Category */}
          <div className="filter-group">
            <h3 className="filter-group__label">Category</h3>
            <div className="filter-group__options">
              <button
                className={`tag ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All
              </button>
              {shopCategories.map((c) => (
                <button
                  key={c.id}
                  className={`tag ${activeCategory === c.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(c.id)}
                >
                  {c.icon} {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="filter-group">
            <h3 className="filter-group__label">Price Range</h3>
            <div className="filter-group__options">
              {priceFilters.map((f) => (
                <button
                  key={f.id}
                  className={`tag ${activePrice === f.id ? 'active' : ''}`}
                  onClick={() => setActivePrice(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="filter-group">
            <h3 className="filter-group__label">Experience Level</h3>
            <div className="filter-group__options">
              {experienceFilters.map((f) => (
                <button
                  key={f.id}
                  className={`tag ${activeExp === f.id ? 'active' : ''}`}
                  onClick={() => setActiveExp(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="shop-main">
          {/* Mobile filter toggle + result count */}
          <div className="shop-bar">
            <p className="text-body-sm text-muted">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
              {hasFilters && ' (filtered)'}
            </p>
            <button
              className="btn btn-secondary btn-sm shop-filter-toggle"
              onClick={() => setFiltersOpen((v) => !v)}
              aria-expanded={filtersOpen}
            >
              <SlidersHorizontal size={14} /> Filters
              {hasFilters && <span className="shop-filter-badge" />}
            </button>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-auto-fill-sm">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  showCompare
                  onCompare={handleCompare}
                  compareSelected={compareList.some((p) => p.id === product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="shop-empty">
              <p className="text-heading-sm">No products match your filters.</p>
              <button className="btn btn-secondary btn-sm" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Compare bar */}
      {compareList.length >= 2 && (
        <div className="compare-bar">
          <div className="container compare-bar__inner">
            <span className="text-body-sm">
              {compareList.length} products selected
            </span>
            <div className="compare-bar__names">
              {compareList.map((p) => (
                <span key={p.id} className="badge badge-default">
                  {p.name.length > 20 ? p.name.slice(0, 20) + '…' : p.name}
                  <button
                    onClick={() => handleCompare(p)}
                    className="compare-bar__remove"
                    aria-label={`Remove ${p.name}`}
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => alert('Full comparison feature — coming soon! You can use the Compare page to compare products side by side.')}
            >
              Compare Now
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

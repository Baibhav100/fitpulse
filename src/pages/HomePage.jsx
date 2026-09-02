import Hero from '../components/sections/Hero';
import ShopByGoal from '../components/sections/ShopByGoal';
import TrendingProducts from '../components/sections/TrendingProducts';
import BestPicks from '../components/sections/BestPicks';
import ComparisonSection from '../components/sections/ComparisonSection';
import ProductFinder from '../components/sections/ProductFinder';
import BuyingGuidesPreview from '../components/sections/BuyingGuidesPreview';
import TrustSection from '../components/sections/TrustSection';
import Newsletter from '../components/sections/Newsletter';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ShopByGoal />
      <TrendingProducts />
      <BestPicks />
      <ComparisonSection />
      <ProductFinder />
      <BuyingGuidesPreview />
      <TrustSection />
      <Newsletter />
    </main>
  );
}

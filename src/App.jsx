import { Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ComparePage from './pages/ComparePage';
import BestPicksPage from './pages/BestPicksPage';
import BuyingGuidesPage from './pages/BuyingGuidesPage';
import GuideDetailPage from './pages/GuideDetailPage';
import FitnessToolsPage from './pages/FitnessToolsPage';
import ReviewsPage from './pages/ReviewsPage';
import {
  AboutPage,
  DisclosurePage,
  PrivacyPage,
  TermsPage,
  ContactPage,
} from './pages/legal/LegalPages';
import './App.css';

// 404 Page
function NotFoundPage() {
  return (
    <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container" style={{ textAlign: 'center', paddingBlock: 'var(--space-20)' }}>
        <div style={{ fontSize: '5rem', marginBottom: 'var(--space-6)' }}>⚡</div>
        <h1 className="text-heading-xl" style={{ marginBottom: 'var(--space-4)' }}>
          Page Not Found
        </h1>
        <p className="text-body text-secondary" style={{ marginBottom: 'var(--space-8)' }}>
          The page you're looking for doesn't exist. Try exploring our gear categories.
        </p>
        <a href="/" className="btn btn-primary btn-lg">
          Back to FITPULSE
        </a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Core */}
        <Route path="/"       element={<HomePage />} />
        <Route path="/shop"   element={<ShopPage />} />
        <Route path="/shop/:category" element={<ShopPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/best"    element={<BestPicksPage />} />
        <Route path="/guides"        element={<BuyingGuidesPage />} />
        <Route path="/guides/:slug"  element={<GuideDetailPage />} />
        <Route path="/tools"   element={<FitnessToolsPage />} />
        <Route path="/tools/:toolId" element={<FitnessToolsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/reviews/:slug" element={<ReviewsPage />} />

        {/* Legal */}
        <Route path="/about"                element={<AboutPage />} />
        <Route path="/affiliate-disclosure" element={<DisclosurePage />} />
        <Route path="/privacy"              element={<PrivacyPage />} />
        <Route path="/terms"                element={<TermsPage />} />
        <Route path="/contact"              element={<ContactPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

import { useState } from 'react';
import { ArrowRight, Sparkles, RotateCcw } from 'lucide-react';
import ProductCard from '../ui/ProductCard';
import { findProducts } from '../../data/products';
import './ProductFinder.css';

const steps = [
  {
    id: 'goal',
    question: 'What is your main fitness goal?',
    options: [
      { value: 'build-muscle', label: 'Build Muscle', icon: '💪' },
      { value: 'lose-weight', label: 'Lose Weight', icon: '🔥' },
      { value: 'improve-cardio', label: 'Improve Cardio', icon: '❤️' },
      { value: 'home-workouts', label: 'Home Workouts', icon: '🏠' },
      { value: 'running', label: 'Running', icon: '🏃' },
      { value: 'recovery', label: 'Recovery', icon: '💆' },
      { value: 'improve-mobility', label: 'Mobility', icon: '🧘' },
      { value: 'general-fitness', label: 'General Fitness', icon: '⚡' },
    ],
  },
  {
    id: 'experience',
    question: 'What is your experience level?',
    options: [
      { value: 'beginner', label: 'Beginner', icon: '🌱', desc: 'Just starting out' },
      { value: 'intermediate', label: 'Intermediate', icon: '📈', desc: '1–3 years training' },
      { value: 'advanced', label: 'Advanced', icon: '🏆', desc: '3+ years training' },
    ],
  },
  {
    id: 'budget',
    question: 'What is your budget?',
    options: [
      { value: 'budget', label: 'Budget', icon: '💰', desc: 'Affordable essentials' },
      { value: 'mid-range', label: 'Mid-Range', icon: '💳', desc: 'Best value for money' },
      { value: 'premium', label: 'Premium', icon: '💎', desc: 'Best-in-class gear' },
    ],
  },
  {
    id: 'location',
    question: 'Where will you primarily train?',
    options: [
      { value: 'home', label: 'Home', icon: '🏠' },
      { value: 'gym', label: 'Gym', icon: '🏋️' },
      { value: 'outdoor', label: 'Outdoor', icon: '🌳' },
      { value: 'mixed', label: 'Mixed', icon: '🔄' },
    ],
  },
];

export default function ProductFinder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const step = steps[currentStep];
  const isLast = currentStep === steps.length - 1;

  const handleSelect = (value) => {
    const newAnswers = { ...answers, [step.id]: value };
    setAnswers(newAnswers);

    if (isLast) {
      const found = findProducts(
        newAnswers.goal,
        newAnswers.experience,
        newAnswers.budget,
        newAnswers.location
      );
      setResults(found);
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'product_finder_complete', newAnswers);
      }
    } else {
      setCurrentStep((s) => s + 1);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
  };

  return (
    <section className="section finder-section" aria-labelledby="finder-heading">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <Sparkles size={12} /> Smart Finder
          </div>
          <h2 id="finder-heading" className="text-heading-xl">
            Not Sure What To Buy?
          </h2>
          <p className="text-body text-secondary" style={{ maxWidth: 480, margin: '0.75rem auto 0' }}>
            Answer 4 quick questions and we'll show you the best gear matched to your goals,
            experience, and budget.
          </p>
        </div>

        <div className="finder-card card-glass">
          {!results ? (
            <>
              {/* Progress */}
              <div className="finder-progress">
                {steps.map((s, i) => (
                  <div
                    key={s.id}
                    className={`finder-progress__dot ${
                      i < currentStep
                        ? 'finder-progress__dot--done'
                        : i === currentStep
                        ? 'finder-progress__dot--active'
                        : ''
                    }`}
                    aria-label={`Step ${i + 1}: ${s.id}`}
                  />
                ))}
              </div>

              <p className="finder-step-num text-label text-muted">
                Step {currentStep + 1} of {steps.length}
              </p>
              <h3 className="finder-question text-heading-md">{step.question}</h3>

              <div className={`finder-options ${step.options.length > 4 ? 'finder-options--grid' : 'finder-options--row'}`}>
                {step.options.map((opt) => (
                  <button
                    key={opt.value}
                    className={`finder-option ${answers[step.id] === opt.value ? 'finder-option--selected' : ''}`}
                    onClick={() => handleSelect(opt.value)}
                  >
                    <span className="finder-option__icon">{opt.icon}</span>
                    <span className="finder-option__label">{opt.label}</span>
                    {opt.desc && <span className="finder-option__desc">{opt.desc}</span>}
                  </button>
                ))}
              </div>

              {currentStep > 0 && (
                <button
                  className="btn btn-ghost finder-back"
                  onClick={() => setCurrentStep((s) => s - 1)}
                >
                  ← Back
                </button>
              )}
            </>
          ) : (
            /* Results */
            <div className="finder-results">
              <div className="finder-results__header">
                <h3 className="text-heading-md">
                  Your Recommended Fitness Gear
                </h3>
                <p className="text-body-sm text-secondary">
                  Based on your goals, experience, and budget — here are our top picks.
                </p>
                <div className="finder-answers">
                  {Object.entries(answers).map(([k, v]) => (
                    <span key={k} className="badge badge-default">
                      {v.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>

              {results.length > 0 ? (
                <div className="grid grid-auto-fill-sm" style={{ marginTop: 'var(--space-8)' }}>
                  {results.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ) : (
                <p className="text-body text-muted" style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
                  We're adding more products to match your criteria. Browse our shop in the
                  meantime!
                </p>
              )}

              <div className="finder-results__footer">
                <button className="btn btn-secondary btn-sm" onClick={reset}>
                  <RotateCcw size={14} /> Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

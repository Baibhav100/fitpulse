// ============================================================
// FITPULSE — Product Data
// All affiliate URLs are PLACEHOLDERS — replace with real ones
// ============================================================

export const products = [
  // ── HOME GYM / STRENGTH ──────────────────────────────────
  {
    id: 'adj-dumbbell-bowflex-552',
    name: 'Bowflex SelectTech 552',
    slug: 'bowflex-selecttech-552',
    category: 'strength',
    subcategory: 'adjustable-dumbbells',
    brand: 'Bowflex',
    shortDescription: 'The most versatile adjustable dumbbell set for home gyms, replacing 15 sets of weights in one compact unit.',
    description: 'The Bowflex SelectTech 552 replaces 15 sets of weights, adjusting from 5 to 52.5 lbs in 2.5 lb increments up to the first 25 lbs. The innovative dial system allows for quick, easy weight changes between sets.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    keyFeatures: [
      'Adjusts from 5–52.5 lbs',
      'Replaces 15 sets of weights',
      'Quick dial weight selection',
      'Compact storage tray included',
      'Durable molding around metal plates',
    ],
    specs: {
      weightRange: '5–52.5 lbs each',
      increments: '2.5 lb (up to 25 lb), 5 lb thereafter',
      material: 'Steel plates with molded shell',
      dimensions: '15.75" × 8" × 9"',
      warranty: '2 years',
    },
    pros: [
      'Incredibly space-efficient',
      'Fast weight change mechanism',
      'Wide weight range suits beginners and intermediates',
      'Sturdy build quality',
    ],
    cons: [
      'Bulkier than traditional dumbbells',
      'Dial can be stiff initially',
      'Premium price point',
    ],
    bestFor: ['Home gyms', 'Space-saving workouts', 'Beginners to intermediates'],
    notIdealFor: ['Heavy powerlifters needing 70+ lbs', 'Commercial gym use'],
    rating: null, // Set to null if unverified — don't fabricate
    priceRange: 'Premium',
    affiliateUrl: 'https://example.com/affiliate/bowflex-552', // PLACEHOLDER
    merchant: 'Amazon',
    cta: 'Check Price',
    trending: true,
    featured: true,
    tags: ['home-gym', 'strength', 'adjustable', 'space-saving'],
    goals: ['build-muscle', 'home-workouts'],
    experience: ['beginner', 'intermediate'],
    budget: ['mid-range', 'premium'],
    location: ['home'],
  },
  {
    id: 'resistance-bands-rogue',
    name: 'Rogue Monster Bands',
    slug: 'rogue-monster-resistance-bands',
    category: 'strength',
    subcategory: 'resistance-bands',
    brand: 'Rogue',
    shortDescription: 'Heavy-duty latex resistance bands used by serious athletes for warm-up, mobility, and assisted lifting.',
    description: 'Rogue Monster Bands are made from continuous natural latex for consistent resistance and durability. Available in multiple resistance levels, they are ideal for mobility work, warm-up routines, and band-assisted pull-ups.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80',
    keyFeatures: [
      'Heavy-duty natural latex construction',
      'Multiple resistance levels',
      'Consistent tension throughout full range',
      'Versatile — mobility, warm-up, assisted lifts',
      'Sold individually or as set',
    ],
    specs: {
      material: 'Natural latex',
      lengths: '41 inches looped',
      resistanceLevels: '10–200+ lbs depending on band',
      warranty: '90 days',
    },
    pros: [
      'Extremely durable',
      'True to resistance ratings',
      'Trusted by athletes worldwide',
      'Compact and portable',
    ],
    cons: [
      'Higher price than generic bands',
      'No handles included',
    ],
    bestFor: ['Athletes', 'Mobility work', 'Assisted pull-ups', 'Warm-up routines'],
    notIdealFor: ['Complete beginners unfamiliar with band exercises'],
    rating: null,
    priceRange: 'Mid-range',
    affiliateUrl: 'https://example.com/affiliate/rogue-monster-bands', // PLACEHOLDER
    merchant: 'Rogue Fitness',
    cta: 'View Deal',
    trending: true,
    featured: false,
    tags: ['resistance-bands', 'mobility', 'strength', 'portable'],
    goals: ['build-muscle', 'improve-mobility', 'home-workouts'],
    experience: ['beginner', 'intermediate', 'advanced'],
    budget: ['mid-range'],
    location: ['home', 'gym', 'outdoor'],
  },
  {
    id: 'pull-up-bar-iron-gym',
    name: 'Iron Gym Total Upper Body Workout Bar',
    slug: 'iron-gym-pull-up-bar',
    category: 'strength',
    subcategory: 'pull-up-bars',
    brand: 'Iron Gym',
    shortDescription: 'A no-drill doorframe pull-up bar for upper body training anywhere at home.',
    description: 'The Iron Gym pull-up bar fits most doorframes without screws or bolts, making it one of the best entry-level upper body tools for home workouts. Supports multiple grip positions.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    keyFeatures: [
      'No installation required',
      'Multiple grip positions',
      'Supports up to 300 lbs',
      'Doubles as push-up and dip stand',
      'Folds away for storage',
    ],
    specs: {
      weightCapacity: '300 lbs',
      material: 'Heavy-duty steel',
      fits: 'Doorframes 24–32 inches wide',
      warranty: '1 year',
    },
    pros: [
      'Very affordable',
      'No tools needed to install',
      'Highly portable',
      'Versatile exercises',
    ],
    cons: [
      'May not fit all doorframes',
      'Not suitable for very heavy athletes',
    ],
    bestFor: ['Beginners', 'Budget home gym', 'Upper body training'],
    notIdealFor: ['Doorframes with moulding or unusual shapes'],
    rating: null,
    priceRange: 'Budget',
    affiliateUrl: 'https://example.com/affiliate/iron-gym-pullup', // PLACEHOLDER
    merchant: 'Amazon',
    cta: 'Check Price',
    trending: false,
    featured: false,
    tags: ['home-gym', 'pull-up', 'beginner', 'budget'],
    goals: ['build-muscle', 'home-workouts'],
    experience: ['beginner', 'intermediate'],
    budget: ['budget'],
    location: ['home'],
  },

  // ── CARDIO / TREADMILLS ──────────────────────────────────
  {
    id: 'treadmill-nordictrack-t75',
    name: 'NordicTrack T 7.5 S Treadmill',
    slug: 'nordictrack-t75s-treadmill',
    category: 'cardio',
    subcategory: 'treadmills',
    brand: 'NordicTrack',
    shortDescription: 'A premium home treadmill with iFIT integration, a 10" HD touchscreen, and incline up to 12%.',
    description: 'The NordicTrack T 7.5 S is a highly rated home treadmill combining connected coaching via iFIT with quality hardware. The 2.75 CHP motor handles speeds from 0–12 mph and inclines up to 12%.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    keyFeatures: [
      '10-inch HD touchscreen display',
      'iFIT connected coaching (subscription)',
      '0–12 mph speed range',
      '0–12% auto incline',
      'SpaceSaver folding design',
    ],
    specs: {
      motor: '2.75 CHP',
      speed: '0–12 mph',
      incline: '0–12%',
      beltSize: '20" × 55"',
      maxWeight: '300 lbs',
      warranty: '10 yr frame, 2 yr parts, 1 yr labor',
    },
    pros: [
      'Excellent build quality',
      'iFIT integration for live/on-demand classes',
      'Quiet for a treadmill',
      'Folds for storage',
    ],
    cons: [
      'iFIT subscription adds ongoing cost',
      'Heavy and large when unfolded',
      'Higher price point',
    ],
    bestFor: ['Home cardio enthusiasts', 'Runner training', 'iFIT users'],
    notIdealFor: ['Very small spaces', 'Budget shoppers'],
    rating: null,
    priceRange: 'Premium',
    affiliateUrl: 'https://example.com/affiliate/nordictrack-t75s', // PLACEHOLDER
    merchant: 'NordicTrack',
    cta: 'View Deal',
    trending: true,
    featured: true,
    tags: ['treadmill', 'cardio', 'home-gym', 'connected-fitness'],
    goals: ['lose-weight', 'improve-cardio', 'running'],
    experience: ['beginner', 'intermediate', 'advanced'],
    budget: ['premium'],
    location: ['home'],
  },

  // ── RUNNING ──────────────────────────────────────────────
  {
    id: 'running-shoes-brooks-ghost',
    name: 'Brooks Ghost 16',
    slug: 'brooks-ghost-16-running-shoes',
    category: 'running',
    subcategory: 'running-shoes',
    brand: 'Brooks',
    shortDescription: 'The legendary all-around running shoe trusted by everyday runners for its smooth, balanced ride.',
    description: "Brooks Ghost 16 continues its reputation as one of the best neutral running shoes for daily training. With DNA Loft v2 cushioning and an updated mesh upper, it delivers a balanced, smooth ride for road running.",
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    keyFeatures: [
      'DNA Loft v2 cushioning',
      'Engineered mesh upper',
      'Segmented Crash Pad',
      '12mm heel-to-toe drop',
      'Available in wide sizes',
    ],
    specs: {
      drop: '12mm',
      weight: 'Approx. 279g (M10)',
      cushioning: 'DNA Loft v2',
      surface: 'Road',
      category: 'Neutral',
    },
    pros: [
      'Extremely comfortable for long runs',
      'Excellent durability',
      'Wide size range available',
      'Versatile — training to casual',
    ],
    cons: [
      'Not designed for speed workouts',
      'Slightly heavier than race-day shoes',
    ],
    bestFor: ['Daily training runs', 'Beginners to running', 'Neutral pronators'],
    notIdealFor: ['Overpronators needing stability', 'Speed/race days'],
    rating: null,
    priceRange: 'Mid-range',
    affiliateUrl: 'https://example.com/affiliate/brooks-ghost-16', // PLACEHOLDER
    merchant: 'Amazon',
    cta: 'Check Price',
    trending: true,
    featured: true,
    tags: ['running', 'shoes', 'neutral', 'daily-training'],
    goals: ['running', 'improve-cardio', 'general-fitness'],
    experience: ['beginner', 'intermediate', 'advanced'],
    budget: ['mid-range'],
    location: ['outdoor', 'gym'],
  },

  // ── FITNESS TRACKERS ─────────────────────────────────────
  {
    id: 'tracker-garmin-forerunner-255',
    name: 'Garmin Forerunner 255',
    slug: 'garmin-forerunner-255',
    category: 'fitness-tech',
    subcategory: 'fitness-trackers',
    brand: 'Garmin',
    shortDescription: 'A feature-rich GPS running watch designed for serious runners who want advanced training metrics without the ultra-premium price.',
    description: 'The Garmin Forerunner 255 offers a robust feature set including advanced training load focus, sleep tracking, HRV status, multi-sport support, and up to 14 days of battery life. Ideal for runners who want meaningful data.',
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600&q=80',
    keyFeatures: [
      'Advanced GPS with multi-band option',
      'HRV Status & Body Battery',
      'Training Readiness score',
      'Up to 14-day battery life',
      'Multi-sport tracking',
    ],
    specs: {
      battery: 'Up to 14 days (smartwatch mode)',
      gps: 'GPS, GLONASS, GALILEO',
      display: '1.3" MIP (255) / 1.1" (255S)',
      waterRating: '5 ATM',
      connectivity: 'Bluetooth, ANT+, Wi-Fi',
    },
    pros: [
      'Excellent GPS accuracy',
      'Rich training analytics',
      'Long battery life',
      'Lightweight and comfortable',
    ],
    cons: [
      'No maps (Music version needed for offline)',
      'Garmin Connect app has learning curve',
      'No ECG sensor',
    ],
    bestFor: ['Serious runners', 'Triathletes', 'Data-driven athletes'],
    notIdealFor: ['Casual users who want a simple step counter', 'Apple ecosystem users'],
    rating: null,
    priceRange: 'Premium',
    affiliateUrl: 'https://example.com/affiliate/garmin-forerunner-255', // PLACEHOLDER
    merchant: 'Amazon',
    cta: 'See Product',
    trending: true,
    featured: true,
    tags: ['fitness-tracker', 'gps-watch', 'running', 'advanced'],
    goals: ['running', 'improve-cardio', 'general-fitness'],
    experience: ['intermediate', 'advanced'],
    budget: ['premium'],
    location: ['outdoor', 'gym'],
  },
  {
    id: 'tracker-fitbit-charge-6',
    name: 'Fitbit Charge 6',
    slug: 'fitbit-charge-6',
    category: 'fitness-tech',
    subcategory: 'fitness-trackers',
    brand: 'Fitbit',
    shortDescription: 'A slim, all-day activity tracker with built-in GPS, heart rate monitoring, and Google integration.',
    description: 'The Fitbit Charge 6 is a sleek fitness band that tracks workouts, sleep, stress, and heart health. Built-in GPS, Google Maps, and YouTube Music controls make it a great everyday companion.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80',
    keyFeatures: [
      'Built-in GPS',
      'ECG app & SpO2 sensor',
      'Google Maps & Wallet support',
      '7-day battery life',
      'Readiness Score',
    ],
    specs: {
      battery: 'Up to 7 days',
      gps: 'Built-in GPS',
      waterRating: '5 ATM',
      display: 'AMOLED',
      connectivity: 'Bluetooth, NFC',
    },
    pros: [
      'Slim and lightweight design',
      'Good Google integration',
      'Accurate heart rate monitoring',
      'Affordable compared to full smartwatches',
    ],
    cons: [
      'Requires Fitbit Premium for some features',
      'Smaller screen than smartwatch competitors',
      'Limited third-party app support',
    ],
    bestFor: ['Everyday fitness tracking', 'Google users', 'Beginners to wearables'],
    notIdealFor: ['Serious athletes needing deep training analytics', 'Apple users'],
    rating: null,
    priceRange: 'Mid-range',
    affiliateUrl: 'https://example.com/affiliate/fitbit-charge-6', // PLACEHOLDER
    merchant: 'Amazon',
    cta: 'Check Price',
    trending: false,
    featured: true,
    tags: ['fitness-tracker', 'heart-rate', 'gps', 'everyday'],
    goals: ['general-fitness', 'lose-weight', 'improve-cardio'],
    experience: ['beginner', 'intermediate'],
    budget: ['mid-range'],
    location: ['home', 'gym', 'outdoor'],
  },

  // ── RECOVERY ─────────────────────────────────────────────
  {
    id: 'foam-roller-trigger-point',
    name: 'TriggerPoint GRID Foam Roller',
    slug: 'triggerpoint-grid-foam-roller',
    category: 'recovery',
    subcategory: 'foam-rollers',
    brand: 'TriggerPoint',
    shortDescription: 'The industry-standard foam roller for myofascial release, muscle recovery, and mobility improvement.',
    description: 'The TriggerPoint GRID is a hollow-core foam roller with a multi-density GRID surface that mimics a massage therapist\'s hands. A must-have recovery tool for athletes and everyday fitness users.',
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&q=80',
    keyFeatures: [
      'Multi-density GRID surface pattern',
      'Hollow EVA foam core',
      'Supports up to 500 lbs',
      '13" length — portable and gym-ready',
      'Includes free online education',
    ],
    specs: {
      length: '13 inches',
      diameter: '5.5 inches',
      material: 'EVA foam over hollow core',
      weightCapacity: '500 lbs',
      warranty: '1 year',
    },
    pros: [
      'Durable — holds shape unlike cheaper rollers',
      'Effective multi-density surface',
      'Compact and portable',
      'Trusted by physical therapists',
    ],
    cons: [
      'Firmer than basic foam rollers',
      'Shorter length may not suit all exercises',
    ],
    bestFor: ['Post-workout recovery', 'Myofascial release', 'Athletes', 'Office workers'],
    notIdealFor: ['Those sensitive to firm pressure'],
    rating: null,
    priceRange: 'Mid-range',
    affiliateUrl: 'https://example.com/affiliate/triggerpoint-grid', // PLACEHOLDER
    merchant: 'Amazon',
    cta: 'Check Price',
    trending: false,
    featured: false,
    tags: ['recovery', 'foam-roller', 'mobility', 'myofascial'],
    goals: ['recovery', 'improve-mobility', 'general-fitness'],
    experience: ['beginner', 'intermediate', 'advanced'],
    budget: ['mid-range'],
    location: ['home', 'gym'],
  },
  {
    id: 'massage-gun-theragun-prime',
    name: 'Theragun Prime',
    slug: 'theragun-prime',
    category: 'recovery',
    subcategory: 'massage-guns',
    brand: 'Therabody',
    shortDescription: 'Professional-grade percussive therapy device with 4 attachments and an ergonomic multi-grip design.',
    description: 'The Theragun Prime delivers quiet yet powerful percussive therapy for muscle recovery and pain relief. With 5 speeds, Bluetooth connectivity to the Therabody app, and 4 attachments, it\'s ideal for serious recovery routines.',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&q=80',
    keyFeatures: [
      '16mm amplitude for deep tissue treatment',
      '5 built-in speeds (1750–2400 PPM)',
      'QuietForce Technology',
      'Bluetooth + Therabody app',
      '120-minute battery life',
    ],
    specs: {
      amplitude: '16mm',
      stallForce: '30 lbs',
      battery: '120 minutes',
      speeds: '5 (1750–2400 PPM)',
      attachments: '4 included',
    },
    pros: [
      'Very quiet for its power',
      'Ergonomic multi-grip design',
      'App integration with guided routines',
      'Premium build quality',
    ],
    cons: [
      'Expensive vs. competitor massage guns',
      'Only 16mm amplitude (Prime vs Pro)',
    ],
    bestFor: ['Athletes needing regular muscle recovery', 'Post-workout soreness', 'Deep tissue massage'],
    notIdealFor: ['Budget shoppers', 'Casual occasional use'],
    rating: null,
    priceRange: 'Premium',
    affiliateUrl: 'https://example.com/affiliate/theragun-prime', // PLACEHOLDER
    merchant: 'Amazon',
    cta: 'View Deal',
    trending: true,
    featured: false,
    tags: ['recovery', 'massage-gun', 'muscle-recovery', 'premium'],
    goals: ['recovery', 'general-fitness'],
    experience: ['intermediate', 'advanced'],
    budget: ['premium'],
    location: ['home', 'gym'],
  },

  // ── YOGA & MOBILITY ──────────────────────────────────────
  {
    id: 'yoga-mat-manduka-pro',
    name: 'Manduka PRO Yoga Mat',
    slug: 'manduka-pro-yoga-mat',
    category: 'yoga-mobility',
    subcategory: 'yoga-mats',
    brand: 'Manduka',
    shortDescription: 'The gold standard yoga mat — 6mm thick, lifetime warranty, and unmatched grip for serious practitioners.',
    description: 'The Manduka PRO is widely considered the best yoga mat for its combination of cushioning, grip, and extraordinary durability. A one-time investment backed by a lifetime guarantee.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    keyFeatures: [
      '6mm closed-cell foam',
      'Superior non-slip surface',
      'Lifetime guarantee',
      'Eco-certified and free of harmful chemicals',
      'Dense cushioning protects joints',
    ],
    specs: {
      thickness: '6mm',
      dimensions: '71" × 24" (standard) / 85" × 26" (long)',
      weight: 'Approx. 7.5 lbs',
      material: 'PVC (eco-certified)',
      warranty: 'Lifetime',
    },
    pros: [
      'Lifetime guarantee is unmatched',
      'Exceptional grip (improves after initial use)',
      'Dense and supportive for all body types',
      'Long-lasting — worth the investment',
    ],
    cons: [
      'Heavy to carry to classes',
      'Requires break-in period for grip',
      'High upfront cost',
    ],
    bestFor: ['Regular yoga practitioners', 'Pilates', 'Those wanting a mat for life'],
    notIdealFor: ['Casual users wanting a lightweight travel mat', 'Absolute beginners on a budget'],
    rating: null,
    priceRange: 'Premium',
    affiliateUrl: 'https://example.com/affiliate/manduka-pro', // PLACEHOLDER
    merchant: 'Amazon',
    cta: 'Check Price',
    trending: false,
    featured: false,
    tags: ['yoga', 'mat', 'premium', 'mobility'],
    goals: ['improve-mobility', 'general-fitness', 'home-workouts'],
    experience: ['intermediate', 'advanced'],
    budget: ['premium'],
    location: ['home', 'gym'],
  },
];

// ── Comparison dataset (adjustable dumbbells) ───────────────
export const comparisonSets = {
  'adjustable-dumbbells': {
    title: 'Best Adjustable Dumbbells Compared',
    subtitle: 'Which adjustable dumbbell is right for your home gym?',
    products: [
      {
        id: 'bowflex-552-cmp',
        name: 'Bowflex SelectTech 552',
        price: '~$349',
        weightRange: '5–52.5 lbs',
        material: 'Steel + molded shell',
        spaceRequired: 'Low',
        bestFor: 'Beginners & intermediates',
        verdict: 'Best all-around choice for most home gym users',
        affiliateUrl: 'https://example.com/affiliate/bowflex-552', // PLACEHOLDER
        cta: 'Check Price',
      },
      {
        id: 'powerblock-elite-cmp',
        name: 'PowerBlock Elite EXP',
        price: '~$299',
        weightRange: '5–50 lbs (expandable to 70/90)',
        material: 'Steel',
        spaceRequired: 'Low',
        bestFor: 'Those wanting future expansion',
        verdict: 'Great if you anticipate needing more weight later',
        affiliateUrl: 'https://example.com/affiliate/powerblock-elite', // PLACEHOLDER
        cta: 'Check Price',
      },
      {
        id: 'nuo-bells-cmp',
        name: 'NUOBELL Adjustable',
        price: '~$399',
        weightRange: '5–80 lbs',
        material: 'Steel with rubber coating',
        spaceRequired: 'Low-Medium',
        bestFor: 'Advanced lifters at home',
        verdict: 'Best choice for those needing heavier loads',
        affiliateUrl: 'https://example.com/affiliate/nuobell', // PLACEHOLDER
        cta: 'View Deal',
      },
      {
        id: 'core-home-fitness-cmp',
        name: 'Core Home Fitness',
        price: '~$299',
        weightRange: '5–50 lbs',
        material: 'Chrome steel',
        spaceRequired: 'Low',
        bestFor: 'Those wanting traditional dumbbell feel',
        verdict: 'Closest feel to regular dumbbells in adjustable form',
        affiliateUrl: 'https://example.com/affiliate/core-home-fitness', // PLACEHOLDER
        cta: 'Check Price',
      },
    ],
    columns: ['Product', 'Price', 'Weight Range', 'Material', 'Space Required', 'Best For', 'Our Verdict', ''],
  },
};

// ── Product Finder Rules ─────────────────────────────────────
// Maps [goal]-[experience]-[budget]-[location] → product IDs
export const finderRules = {
  'build-muscle-beginner-budget-home': ['pull-up-bar-iron-gym', 'resistance-bands-rogue'],
  'build-muscle-beginner-mid-range-home': ['adj-dumbbell-bowflex-552', 'resistance-bands-rogue'],
  'build-muscle-intermediate-mid-range-home': ['adj-dumbbell-bowflex-552', 'resistance-bands-rogue'],
  'build-muscle-intermediate-premium-home': ['adj-dumbbell-bowflex-552', 'massage-gun-theragun-prime'],
  'build-muscle-advanced-premium-gym': ['adj-dumbbell-bowflex-552', 'massage-gun-theragun-prime'],
  'lose-weight-beginner-budget-home': ['resistance-bands-rogue', 'pull-up-bar-iron-gym'],
  'lose-weight-beginner-mid-range-home': ['treadmill-nordictrack-t75', 'tracker-fitbit-charge-6'],
  'improve-cardio-beginner-mid-range-home': ['treadmill-nordictrack-t75', 'tracker-fitbit-charge-6'],
  'improve-cardio-intermediate-mid-range-outdoor': ['running-shoes-brooks-ghost', 'tracker-garmin-forerunner-255'],
  'running-beginner-mid-range-outdoor': ['running-shoes-brooks-ghost', 'tracker-fitbit-charge-6'],
  'running-intermediate-premium-outdoor': ['running-shoes-brooks-ghost', 'tracker-garmin-forerunner-255'],
  'running-advanced-premium-outdoor': ['tracker-garmin-forerunner-255', 'running-shoes-brooks-ghost'],
  'recovery-beginner-budget-home': ['foam-roller-trigger-point'],
  'recovery-intermediate-mid-range-home': ['foam-roller-trigger-point', 'massage-gun-theragun-prime'],
  'recovery-advanced-premium-home': ['massage-gun-theragun-prime', 'foam-roller-trigger-point'],
  'improve-mobility-beginner-budget-home': ['foam-roller-trigger-point', 'resistance-bands-rogue'],
  'improve-mobility-intermediate-mid-range-home': ['yoga-mat-manduka-pro', 'foam-roller-trigger-point'],
  'home-workouts-beginner-budget-home': ['resistance-bands-rogue', 'pull-up-bar-iron-gym'],
  'home-workouts-beginner-mid-range-home': ['adj-dumbbell-bowflex-552', 'resistance-bands-rogue'],
  'general-fitness-beginner-budget-home': ['resistance-bands-rogue', 'foam-roller-trigger-point'],
  'general-fitness-beginner-mid-range-home': ['tracker-fitbit-charge-6', 'adj-dumbbell-bowflex-552'],
  'general-fitness-intermediate-mid-range-mixed': ['tracker-fitbit-charge-6', 'foam-roller-trigger-point'],
};

// ── Best Picks categories ────────────────────────────────────
export const bestPicksCategories = [
  { id: 'home-gym', label: 'Best Home Gym Equipment', icon: '🏠' },
  { id: 'adjustable-dumbbells', label: 'Best Adjustable Dumbbells', icon: '🏋️' },
  { id: 'treadmills', label: 'Best Treadmills', icon: '🏃' },
  { id: 'resistance-bands', label: 'Best Resistance Bands', icon: '🔗' },
  { id: 'running-shoes', label: 'Best Running Shoes', icon: '👟' },
  { id: 'fitness-trackers', label: 'Best Fitness Trackers', icon: '⌚' },
  { id: 'yoga-mats', label: 'Best Yoga Mats', icon: '🧘' },
  { id: 'recovery-tools', label: 'Best Recovery Tools', icon: '💆' },
  { id: 'gym-accessories', label: 'Best Gym Accessories', icon: '🎽' },
];

// Helper: get product by id
export const getProductById = (id) => products.find((p) => p.id === id);

// Helper: get products by category
export const getProductsByCategory = (category) =>
  products.filter((p) => p.category === category);

// Helper: get trending products
export const getTrendingProducts = () => products.filter((p) => p.trending);

// Helper: get featured products
export const getFeaturedProducts = () => products.filter((p) => p.featured);

// Helper: product finder
export const findProducts = (goal, experience, budget, location) => {
  const key = `${goal}-${experience}-${budget}-${location}`;
  const ids = finderRules[key] || finderRules[`${goal}-${experience}-${budget}-home`] || [];
  const fallback = products.filter(
    (p) =>
      p.goals.includes(goal) &&
      p.experience.includes(experience) &&
      p.budget.includes(budget)
  );
  const matched = ids.map(getProductById).filter(Boolean);
  return matched.length ? matched : fallback.slice(0, 3);
};

import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Calculator, ChevronRight, AlertCircle } from 'lucide-react';
import './FitnessToolsPage.css';

// ── Tool definitions ─────────────────────────────────────────
const tools = [
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index based on height and weight.',
    icon: '📏',
    category: 'Body Composition',
  },
  {
    id: 'calorie-calculator',
    name: 'Calorie Calculator',
    description: 'Estimate your daily calorie needs based on your activity level.',
    icon: '🔥',
    category: 'Nutrition',
  },
  {
    id: 'protein-calculator',
    name: 'Protein Intake Calculator',
    description: 'Find your optimal daily protein intake for your goals.',
    icon: '🥩',
    category: 'Nutrition',
  },
  {
    id: 'macro-calculator',
    name: 'Macro Calculator',
    description: 'Calculate your ideal macronutrient split for your goal.',
    icon: '🥗',
    category: 'Nutrition',
  },
  {
    id: 'one-rep-max',
    name: '1 Rep Max Calculator',
    description: 'Estimate your one-rep max from a recent training set.',
    icon: '🏋️',
    category: 'Strength',
  },
  {
    id: 'body-fat-estimator',
    name: 'Body Fat Estimator',
    description: 'Estimate body fat percentage using the US Navy method.',
    icon: '📊',
    category: 'Body Composition',
  },
  {
    id: 'ideal-weight',
    name: 'Ideal Weight Calculator',
    description: 'Estimate a healthy weight range based on height and frame size.',
    icon: '⚖️',
    category: 'Body Composition',
  },
  {
    id: 'workout-volume',
    name: 'Workout Volume Calculator',
    description: 'Calculate total training volume (sets × reps × weight).',
    icon: '📈',
    category: 'Strength',
  },
  {
    id: 'home-gym-budget',
    name: 'Home Gym Budget Calculator',
    description: 'Plan your home gym equipment budget by category.',
    icon: '🏠',
    category: 'Planning',
  },
];

// ── Individual Tool Components ────────────────────────────────

function BMICalc() {
  const [form, setForm] = useState({ weight: '', height: '', unit: 'metric' });
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const { weight, height, unit } = form;
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // cm → m
    if (!w || !h) return;
    const bmi = unit === 'metric' ? w / (h * h) : (703 * w) / (parseFloat(height) ** 2);
    const cat =
      bmi < 18.5 ? 'Underweight' :
      bmi < 25   ? 'Normal weight' :
      bmi < 30   ? 'Overweight' : 'Obese';
    setResult({ bmi: bmi.toFixed(1), category: cat });
    if (typeof window.gtag === 'function') window.gtag('event', 'tool_use', { tool: 'bmi' });
  };

  return (
    <div className="tool-form">
      <form onSubmit={calculate}>
        <div className="input-group">
          <label className="input-label" htmlFor="bmi-unit">Unit System</label>
          <select id="bmi-unit" className="input" value={form.unit} onChange={e => setForm({...form, unit: e.target.value})}>
            <option value="metric">Metric (kg, cm)</option>
            <option value="imperial">Imperial (lbs, in)</option>
          </select>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="bmi-weight">
            Weight ({form.unit === 'metric' ? 'kg' : 'lbs'})
          </label>
          <input id="bmi-weight" className="input" type="number" min="1" step="0.1"
            placeholder={form.unit === 'metric' ? 'e.g. 70' : 'e.g. 154'}
            value={form.weight} onChange={e => setForm({...form, weight: e.target.value})} required />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="bmi-height">
            Height ({form.unit === 'metric' ? 'cm' : 'inches'})
          </label>
          <input id="bmi-height" className="input" type="number" min="1" step="0.1"
            placeholder={form.unit === 'metric' ? 'e.g. 175' : 'e.g. 69'}
            value={form.height} onChange={e => setForm({...form, height: e.target.value})} required />
        </div>
        <button type="submit" className="btn btn-primary">Calculate BMI</button>
      </form>
      {result && (
        <div className="tool-result">
          <div className="tool-result__value">{result.bmi}</div>
          <div className="tool-result__label">BMI — {result.category}</div>
          <div className="tool-result__scale">
            <div className={`tool-result__bar bmi-${result.bmi < 18.5 ? 'under' : result.bmi < 25 ? 'normal' : result.bmi < 30 ? 'over' : 'obese'}`} />
          </div>
          <p className="text-caption text-muted" style={{marginTop:'0.5rem'}}>
            Underweight &lt;18.5 · Normal 18.5–24.9 · Overweight 25–29.9 · Obese ≥30
          </p>
        </div>
      )}
    </div>
  );
}

function CalorieCalc() {
  const [form, setForm] = useState({ age: '', weight: '', height: '', sex: 'male', activity: '1.375', goal: 'maintain' });
  const [result, setResult] = useState(null);

  const activityLevels = [
    { value: '1.2',   label: 'Sedentary (little/no exercise)' },
    { value: '1.375', label: 'Lightly active (1–3 days/week)' },
    { value: '1.55',  label: 'Moderately active (3–5 days/week)' },
    { value: '1.725', label: 'Very active (6–7 days/week)' },
    { value: '1.9',   label: 'Extremely active (twice/day)' },
  ];

  const calculate = (e) => {
    e.preventDefault();
    const w = parseFloat(form.weight), h = parseFloat(form.height), a = parseFloat(form.age);
    // Mifflin-St Jeor
    const bmr = form.sex === 'male'
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;
    const tdee = bmr * parseFloat(form.activity);
    const calories = form.goal === 'lose' ? tdee - 500 : form.goal === 'gain' ? tdee + 300 : tdee;
    setResult({ bmr: Math.round(bmr), tdee: Math.round(tdee), target: Math.round(calories) });
    if (typeof window.gtag === 'function') window.gtag('event', 'tool_use', { tool: 'calorie' });
  };

  return (
    <div className="tool-form">
      <form onSubmit={calculate}>
        <div className="tool-form__row">
          <div className="input-group">
            <label className="input-label" htmlFor="cal-age">Age</label>
            <input id="cal-age" className="input" type="number" min="10" max="100" placeholder="e.g. 28"
              value={form.age} onChange={e => setForm({...form, age: e.target.value})} required />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="cal-sex">Sex</label>
            <select id="cal-sex" className="input" value={form.sex} onChange={e => setForm({...form, sex: e.target.value})}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="tool-form__row">
          <div className="input-group">
            <label className="input-label" htmlFor="cal-weight">Weight (kg)</label>
            <input id="cal-weight" className="input" type="number" min="1" step="0.1" placeholder="e.g. 70"
              value={form.weight} onChange={e => setForm({...form, weight: e.target.value})} required />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="cal-height">Height (cm)</label>
            <input id="cal-height" className="input" type="number" min="50" step="0.1" placeholder="e.g. 175"
              value={form.height} onChange={e => setForm({...form, height: e.target.value})} required />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="cal-activity">Activity Level</label>
          <select id="cal-activity" className="input" value={form.activity} onChange={e => setForm({...form, activity: e.target.value})}>
            {activityLevels.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
          </select>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="cal-goal">Goal</label>
          <select id="cal-goal" className="input" value={form.goal} onChange={e => setForm({...form, goal: e.target.value})}>
            <option value="lose">Lose Weight (−500 kcal)</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Gain Muscle (+300 kcal)</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Calculate Calories</button>
      </form>
      {result && (
        <div className="tool-result">
          <div className="tool-result__value">{result.target} kcal</div>
          <div className="tool-result__label">Daily Target</div>
          <div className="tool-result__breakdown">
            <div><span>BMR</span><strong>{result.bmr} kcal</strong></div>
            <div><span>TDEE</span><strong>{result.tdee} kcal</strong></div>
            <div><span>Target</span><strong>{result.target} kcal</strong></div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProteinCalc() {
  const [form, setForm] = useState({ weight: '', goal: 'maintain', activity: 'moderate' });
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const w = parseFloat(form.weight);
    const multiplier =
      form.goal === 'lose' ? (form.activity === 'active' ? 2.2 : 1.8) :
      form.goal === 'gain' ? (form.activity === 'active' ? 2.4 : 2.0) :
      (form.activity === 'active' ? 1.8 : 1.4);
    const protein = Math.round(w * multiplier);
    setResult({ protein, min: Math.round(w * 1.4), max: Math.round(w * 2.4) });
    if (typeof window.gtag === 'function') window.gtag('event', 'tool_use', { tool: 'protein' });
  };

  return (
    <div className="tool-form">
      <form onSubmit={calculate}>
        <div className="input-group">
          <label className="input-label" htmlFor="prot-weight">Body Weight (kg)</label>
          <input id="prot-weight" className="input" type="number" min="1" step="0.1" placeholder="e.g. 70"
            value={form.weight} onChange={e => setForm({...form, weight: e.target.value})} required />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="prot-goal">Goal</label>
          <select id="prot-goal" className="input" value={form.goal} onChange={e => setForm({...form, goal: e.target.value})}>
            <option value="lose">Lose Fat (preserve muscle)</option>
            <option value="maintain">Maintain</option>
            <option value="gain">Build Muscle</option>
          </select>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="prot-activity">Training Frequency</label>
          <select id="prot-activity" className="input" value={form.activity} onChange={e => setForm({...form, activity: e.target.value})}>
            <option value="moderate">Moderate (3–4×/week)</option>
            <option value="active">Active (5+×/week)</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Calculate Protein</button>
      </form>
      {result && (
        <div className="tool-result">
          <div className="tool-result__value">{result.protein}g</div>
          <div className="tool-result__label">Daily Protein Target</div>
          <p className="text-body-sm text-muted" style={{marginTop:'0.75rem'}}>
            General range for your weight: {result.min}g – {result.max}g per day.
          </p>
        </div>
      )}
    </div>
  );
}

function MacroCalc() {
  const [form, setForm] = useState({ calories: '', goal: 'maintain' });
  const [result, setResult] = useState(null);

  const splits = {
    lose:     { protein: 0.40, carbs: 0.30, fat: 0.30, label: 'Fat Loss (High Protein)' },
    maintain: { protein: 0.30, carbs: 0.40, fat: 0.30, label: 'Maintenance (Balanced)' },
    gain:     { protein: 0.25, carbs: 0.50, fat: 0.25, label: 'Muscle Gain (Higher Carbs)' },
  };

  const calculate = (e) => {
    e.preventDefault();
    const cal = parseFloat(form.calories);
    const split = splits[form.goal];
    setResult({
      label: split.label,
      protein: Math.round((cal * split.protein) / 4),
      carbs:   Math.round((cal * split.carbs)   / 4),
      fat:     Math.round((cal * split.fat)      / 9),
    });
    if (typeof window.gtag === 'function') window.gtag('event', 'tool_use', { tool: 'macro' });
  };

  return (
    <div className="tool-form">
      <form onSubmit={calculate}>
        <div className="input-group">
          <label className="input-label" htmlFor="macro-cal">Daily Calorie Target (kcal)</label>
          <input id="macro-cal" className="input" type="number" min="500" step="50" placeholder="e.g. 2000"
            value={form.calories} onChange={e => setForm({...form, calories: e.target.value})} required />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="macro-goal">Goal</label>
          <select id="macro-goal" className="input" value={form.goal} onChange={e => setForm({...form, goal: e.target.value})}>
            <option value="lose">Fat Loss</option>
            <option value="maintain">Maintenance</option>
            <option value="gain">Muscle Gain</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Calculate Macros</button>
      </form>
      {result && (
        <div className="tool-result">
          <div className="tool-result__label" style={{marginBottom:'1rem'}}>{result.label}</div>
          <div className="macro-result">
            <div className="macro-result__item macro-result__item--protein">
              <span className="macro-result__value">{result.protein}g</span>
              <span className="macro-result__name">Protein</span>
            </div>
            <div className="macro-result__item macro-result__item--carbs">
              <span className="macro-result__value">{result.carbs}g</span>
              <span className="macro-result__name">Carbs</span>
            </div>
            <div className="macro-result__item macro-result__item--fat">
              <span className="macro-result__value">{result.fat}g</span>
              <span className="macro-result__name">Fat</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function OneRepMaxCalc() {
  const [form, setForm] = useState({ weight: '', reps: '', unit: 'kg' });
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const w = parseFloat(form.weight), r = parseInt(form.reps);
    // Epley formula
    const orm = w * (1 + r / 30);
    setResult({
      orm: orm.toFixed(1),
      p90: (orm * 0.9).toFixed(1),
      p80: (orm * 0.8).toFixed(1),
      p70: (orm * 0.7).toFixed(1),
    });
    if (typeof window.gtag === 'function') window.gtag('event', 'tool_use', { tool: '1rm' });
  };

  return (
    <div className="tool-form">
      <form onSubmit={calculate}>
        <div className="input-group">
          <label className="input-label" htmlFor="orm-unit">Unit</label>
          <select id="orm-unit" className="input" value={form.unit} onChange={e => setForm({...form, unit: e.target.value})}>
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
          </select>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="orm-weight">Weight Lifted ({form.unit})</label>
          <input id="orm-weight" className="input" type="number" min="1" step="0.5" placeholder="e.g. 80"
            value={form.weight} onChange={e => setForm({...form, weight: e.target.value})} required />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="orm-reps">Reps Performed (1–10 for accuracy)</label>
          <input id="orm-reps" className="input" type="number" min="1" max="30" placeholder="e.g. 5"
            value={form.reps} onChange={e => setForm({...form, reps: e.target.value})} required />
        </div>
        <button type="submit" className="btn btn-primary">Calculate 1RM</button>
      </form>
      {result && (
        <div className="tool-result">
          <div className="tool-result__value">{result.orm} {form.unit}</div>
          <div className="tool-result__label">Estimated 1 Rep Max (Epley Formula)</div>
          <div className="tool-result__breakdown">
            <div><span>90% (3–5 reps)</span><strong>{result.p90} {form.unit}</strong></div>
            <div><span>80% (8–10 reps)</span><strong>{result.p80} {form.unit}</strong></div>
            <div><span>70% (12–15 reps)</span><strong>{result.p70} {form.unit}</strong></div>
          </div>
        </div>
      )}
    </div>
  );
}

function BodyFatCalc() {
  const [form, setForm] = useState({ sex: 'male', height: '', neck: '', waist: '', hip: '' });
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const h = parseFloat(form.height), n = parseFloat(form.neck), w = parseFloat(form.waist);
    let bf;
    if (form.sex === 'male') {
      bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      const hip = parseFloat(form.hip);
      bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hip - n) + 0.22100 * Math.log10(h)) - 450;
    }
    const cat =
      form.sex === 'male'
        ? bf < 6 ? 'Essential Fat' : bf < 14 ? 'Athletic' : bf < 18 ? 'Fitness' : bf < 25 ? 'Average' : 'Above Average'
        : bf < 14 ? 'Essential Fat' : bf < 21 ? 'Athletic' : bf < 25 ? 'Fitness' : bf < 32 ? 'Average' : 'Above Average';
    setResult({ bf: bf.toFixed(1), category: cat });
    if (typeof window.gtag === 'function') window.gtag('event', 'tool_use', { tool: 'bodyfat' });
  };

  return (
    <div className="tool-form">
      <form onSubmit={calculate}>
        <div className="input-group">
          <label className="input-label" htmlFor="bf-sex">Sex</label>
          <select id="bf-sex" className="input" value={form.sex} onChange={e => setForm({...form, sex: e.target.value, hip: ''})}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="bf-height">Height (cm)</label>
          <input id="bf-height" className="input" type="number" min="50" step="0.1" placeholder="e.g. 175"
            value={form.height} onChange={e => setForm({...form, height: e.target.value})} required />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="bf-neck">Neck circumference (cm)</label>
          <input id="bf-neck" className="input" type="number" min="1" step="0.1" placeholder="e.g. 38"
            value={form.neck} onChange={e => setForm({...form, neck: e.target.value})} required />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="bf-waist">Waist circumference (cm)</label>
          <input id="bf-waist" className="input" type="number" min="1" step="0.1" placeholder="e.g. 85"
            value={form.waist} onChange={e => setForm({...form, waist: e.target.value})} required />
        </div>
        {form.sex === 'female' && (
          <div className="input-group">
            <label className="input-label" htmlFor="bf-hip">Hip circumference (cm)</label>
            <input id="bf-hip" className="input" type="number" min="1" step="0.1" placeholder="e.g. 95"
              value={form.hip} onChange={e => setForm({...form, hip: e.target.value})} required />
          </div>
        )}
        <button type="submit" className="btn btn-primary">Estimate Body Fat</button>
      </form>
      {result && (
        <div className="tool-result">
          <div className="tool-result__value">{result.bf}%</div>
          <div className="tool-result__label">Estimated Body Fat — {result.category}</div>
          <p className="text-caption text-muted" style={{marginTop:'0.5rem'}}>
            US Navy Method. Accuracy may vary; use as a general reference only.
          </p>
        </div>
      )}
    </div>
  );
}

function IdealWeightCalc() {
  const [form, setForm] = useState({ height: '', sex: 'male' });
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const h = parseFloat(form.height);
    // Devine formula (kg, cm)
    const hIn = h / 2.54;
    const ibw = form.sex === 'male' ? 50 + 2.3 * (hIn - 60) : 45.5 + 2.3 * (hIn - 60);
    setResult({ ibw: ibw.toFixed(1), low: (ibw * 0.9).toFixed(1), high: (ibw * 1.1).toFixed(1) });
    if (typeof window.gtag === 'function') window.gtag('event', 'tool_use', { tool: 'idealweight' });
  };

  return (
    <div className="tool-form">
      <form onSubmit={calculate}>
        <div className="input-group">
          <label className="input-label" htmlFor="iw-sex">Sex</label>
          <select id="iw-sex" className="input" value={form.sex} onChange={e => setForm({...form, sex: e.target.value})}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="iw-height">Height (cm)</label>
          <input id="iw-height" className="input" type="number" min="100" step="0.1" placeholder="e.g. 175"
            value={form.height} onChange={e => setForm({...form, height: e.target.value})} required />
        </div>
        <button type="submit" className="btn btn-primary">Calculate Ideal Weight</button>
      </form>
      {result && (
        <div className="tool-result">
          <div className="tool-result__value">{result.ibw} kg</div>
          <div className="tool-result__label">Ideal Body Weight (Devine Formula)</div>
          <p className="text-body-sm text-muted" style={{marginTop:'0.75rem'}}>
            Healthy range estimate: {result.low}kg – {result.high}kg
          </p>
        </div>
      )}
    </div>
  );
}

function WorkoutVolumeCalc() {
  const [form, setForm] = useState({ exercises: [{ name: '', sets: '', reps: '', weight: '' }] });
  const [result, setResult] = useState(null);

  const addExercise = () => setForm({ exercises: [...form.exercises, { name: '', sets: '', reps: '', weight: '' }] });
  const updateEx = (i, field, value) => {
    const updated = [...form.exercises];
    updated[i][field] = value;
    setForm({ exercises: updated });
  };

  const calculate = (e) => {
    e.preventDefault();
    const total = form.exercises.reduce((sum, ex) => {
      const v = parseFloat(ex.sets) * parseFloat(ex.reps) * parseFloat(ex.weight);
      return sum + (isNaN(v) ? 0 : v);
    }, 0);
    setResult({ total: total.toFixed(0) });
    if (typeof window.gtag === 'function') window.gtag('event', 'tool_use', { tool: 'volume' });
  };

  return (
    <div className="tool-form">
      <form onSubmit={calculate}>
        {form.exercises.map((ex, i) => (
          <div key={i} className="volume-exercise">
            <input className="input" placeholder={`Exercise ${i + 1} name`} value={ex.name}
              onChange={e => updateEx(i, 'name', e.target.value)} />
            <div className="volume-exercise__inputs">
              <input className="input" type="number" min="1" placeholder="Sets" value={ex.sets}
                onChange={e => updateEx(i, 'sets', e.target.value)} required />
              <input className="input" type="number" min="1" placeholder="Reps" value={ex.reps}
                onChange={e => updateEx(i, 'reps', e.target.value)} required />
              <input className="input" type="number" min="0" step="0.5" placeholder="Weight (kg)" value={ex.weight}
                onChange={e => updateEx(i, 'weight', e.target.value)} required />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary btn-sm" onClick={addExercise} style={{marginBottom:'1rem'}}>
          + Add Exercise
        </button>
        <br />
        <button type="submit" className="btn btn-primary">Calculate Volume</button>
      </form>
      {result && (
        <div className="tool-result">
          <div className="tool-result__value">{result.total} kg</div>
          <div className="tool-result__label">Total Workout Volume (sets × reps × weight)</div>
        </div>
      )}
    </div>
  );
}

function HomeGymBudgetCalc() {
  const categories = [
    { id: 'flooring', label: 'Flooring & Mats', placeholder: '3000' },
    { id: 'dumbbell', label: 'Dumbbells / Weights', placeholder: '8000' },
    { id: 'barbell', label: 'Barbell & Rack', placeholder: '15000' },
    { id: 'cardio', label: 'Cardio Equipment', placeholder: '20000' },
    { id: 'bands', label: 'Resistance Bands', placeholder: '1000' },
    { id: 'accessories', label: 'Accessories & Extras', placeholder: '2000' },
  ];

  const [form, setForm] = useState({});
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const total = categories.reduce((sum, c) => sum + (parseFloat(form[c.id]) || 0), 0);
    setResult({ total: total.toFixed(0), breakdown: categories.map(c => ({ label: c.label, value: parseFloat(form[c.id]) || 0 })) });
    if (typeof window.gtag === 'function') window.gtag('event', 'tool_use', { tool: 'homegymbudget' });
  };

  return (
    <div className="tool-form">
      <form onSubmit={calculate}>
        {categories.map(cat => (
          <div className="input-group" key={cat.id}>
            <label className="input-label" htmlFor={`hgb-${cat.id}`}>{cat.label} (₹ or your currency)</label>
            <input id={`hgb-${cat.id}`} className="input" type="number" min="0" step="100"
              placeholder={cat.placeholder} value={form[cat.id] || ''}
              onChange={e => setForm({...form, [cat.id]: e.target.value})} />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Calculate Budget</button>
      </form>
      {result && (
        <div className="tool-result">
          <div className="tool-result__value">Total: {Number(result.total).toLocaleString()}</div>
          <div className="tool-result__label">Home Gym Budget Estimate</div>
          <div className="tool-result__breakdown">
            {result.breakdown.filter(b => b.value > 0).map(b => (
              <div key={b.label}>
                <span>{b.label}</span>
                <strong>{b.value.toLocaleString()}</strong>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Map tool ID → component
const toolComponents = {
  'bmi-calculator':    BMICalc,
  'calorie-calculator': CalorieCalc,
  'protein-calculator': ProteinCalc,
  'macro-calculator':  MacroCalc,
  'one-rep-max':       OneRepMaxCalc,
  'body-fat-estimator': BodyFatCalc,
  'ideal-weight':      IdealWeightCalc,
  'workout-volume':    WorkoutVolumeCalc,
  'home-gym-budget':   HomeGymBudgetCalc,
};

// ── Main Page ─────────────────────────────────────────────────
export default function FitnessToolsPage() {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const activeTool = tools.find((t) => t.id === toolId);
  const ToolComponent = toolId ? toolComponents[toolId] : null;

  return (
    <main className="tools-page">
      <div className="tools-hero">
        <div className="container">
          <div className="section-label">
            <Calculator size={12} /> Free Fitness Calculators
          </div>
          <h1 className="text-heading-xl">Fitness Tools</h1>
          <p className="text-body text-secondary" style={{ maxWidth: 520, marginTop: '0.5rem' }}>
            Fast, free calculators to help you understand your body and plan your training
            smarter — all running locally in your browser.
          </p>
          <div className="tools-disclaimer">
            <AlertCircle size={14} />
            <span>
              These tools are for educational purposes only and should not replace professional
              medical or fitness advice. Always consult a qualified professional before making
              health decisions.
            </span>
          </div>
        </div>
      </div>

      <div className="container tools-layout">
        {/* Sidebar */}
        <aside className="tools-sidebar">
          <nav aria-label="Fitness tools">
            {tools.map((tool) => (
              <Link
                key={tool.id}
                to={`/tools/${tool.id}`}
                className={`tools-nav-item ${toolId === tool.id ? 'tools-nav-item--active' : ''}`}
              >
                <span className="tools-nav-item__icon">{tool.icon}</span>
                <span className="tools-nav-item__label">{tool.name}</span>
                <ChevronRight size={14} className="tools-nav-item__arrow" />
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Area */}
        <div className="tools-main">
          {activeTool && ToolComponent ? (
            <div className="tool-container">
              <div className="tool-header">
                <span className="tool-header__icon">{activeTool.icon}</span>
                <div>
                  <div className="badge badge-default" style={{ marginBottom: '0.5rem' }}>
                    {activeTool.category}
                  </div>
                  <h2 className="text-heading-md">{activeTool.name}</h2>
                  <p className="text-body-sm text-secondary">{activeTool.description}</p>
                </div>
              </div>
              <div className="divider" />
              <ToolComponent />
            </div>
          ) : (
            <div className="tools-overview">
              <h2 className="text-heading-md" style={{ marginBottom: 'var(--space-8)' }}>
                Select a Tool
              </h2>
              <div className="tools-overview-grid">
                {tools.map((tool) => (
                  <Link
                    key={tool.id}
                    to={`/tools/${tool.id}`}
                    className="tool-overview-card"
                  >
                    <span className="tool-overview-card__icon">{tool.icon}</span>
                    <div>
                      <h3 className="tool-overview-card__name">{tool.name}</h3>
                      <p className="tool-overview-card__desc">{tool.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

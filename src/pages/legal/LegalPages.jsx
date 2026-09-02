import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import './LegalPages.css';

export function AboutPage() {
  return (
    <main className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1 className="text-heading-xl">About FITPULSE</h1>
          <p className="text-body text-secondary" style={{ maxWidth: 540, marginTop: '0.5rem' }}>
            A modern fitness product discovery platform built to help people make smarter gear decisions.
          </p>
        </div>
      </div>
      <div className="container legal-content">
        <div className="prose">
          <div className="about-brand-block">
            <Zap size={36} color="var(--accent)" />
            <div>
              <h2 style={{ fontFamily: 'var(--font-primary)', letterSpacing: '-0.03em', fontSize: '2rem', fontWeight: 900 }}>
                FITPULSE
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                Smarter Choices. Stronger Results.
              </p>
            </div>
          </div>

          <h2>What We Do</h2>
          <p>
            FITPULSE is a fitness product discovery and comparison platform. We research,
            compare, and curate fitness products across categories including home gym equipment,
            strength training gear, cardio machines, running accessories, recovery tools, and
            fitness technology.
          </p>
          <p>
            Our goal is simple: help you find the right fitness product for your specific goals,
            experience level, and budget — without wasting time or money on the wrong gear.
          </p>

          <h2>How We Make Money</h2>
          <p>
            FITPULSE is an affiliate marketing platform. When you click a product link on our
            site and make a purchase on the merchant's website, we may earn a small commission.
            This comes at <strong>no additional cost to you</strong>.
          </p>
          <p>
            We do not sell products directly, collect payments, or operate a store. Every
            purchase happens on the merchant's platform.
          </p>

          <h2>Our Editorial Approach</h2>
          <p>
            Product information on FITPULSE is based on publicly available specifications, user
            feedback across trusted platforms, and comparative research. We clearly state when
            a product has not been personally tested by our team.
          </p>
          <p>
            We do not fabricate reviews, invent ratings, or create fake testimonials. Our
            affiliate relationships do not influence editorial decisions.
          </p>

          <h2>Our Mission</h2>
          <p>
            We believe that finding the right fitness gear should be a helpful experience, not
            an overwhelming one. FITPULSE exists to be the resource we wish existed when we
            were trying to make smart fitness purchases.
          </p>

          <h2>Contact Us</h2>
          <p>
            Have a question, feedback, or partnership inquiry?{' '}
            <Link to="/contact">Get in touch →</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export function DisclosurePage() {
  return (
    <main className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1 className="text-heading-xl">Affiliate Disclosure</h1>
          <p className="text-body text-secondary" style={{ maxWidth: 540, marginTop: '0.5rem' }}>
            Transparency about how FITPULSE earns revenue.
          </p>
        </div>
      </div>
      <div className="container legal-content">
        <div className="disclosure-notice">
          <strong>Summary:</strong> Some links on FITPULSE are affiliate links. If you click and
          purchase through them, we may earn a commission at no extra cost to you.
        </div>
        <div className="prose">
          <h2>What Are Affiliate Links?</h2>
          <p>
            An affiliate link is a special tracking URL that identifies FITPULSE as the referral
            source when you visit a merchant's website. If you complete a purchase through that
            link, the merchant pays us a commission as a referral fee.
          </p>

          <h2>Which Links Are Affiliate Links?</h2>
          <p>
            Product CTAs on FITPULSE such as "Check Price", "View Deal", "See on Amazon", and
            "Shop Now" are affiliate links that redirect to external merchant websites. These are
            clearly identified by the merchant name shown alongside the CTA.
          </p>
          <p>
            <strong>We do not sell products, process payments, or handle transactions.</strong>{' '}
            All purchases are completed directly on the merchant's platform.
          </p>

          <h2>Does This Affect Our Recommendations?</h2>
          <p>
            No. Our editorial content, product rankings, and reviews are produced independently
            of affiliate relationships. We recommend products based on specifications, user
            feedback, and comparative research — not on commission rates.
          </p>

          <h2>Amazon Associates Program Statement</h2>
          <p>
            <strong>FITPULSE is a participant in the Amazon Services LLC Associates Program (and Amazon Associates India)</strong>, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com, Amazon.in, and affiliated sites.
          </p>
          <p>
            <em>"As an Amazon Associate, FITPULSE earns from qualifying purchases."</em>
          </p>

          <h2>Affiliate Partners</h2>
          <p>
            We may earn commissions through affiliate programs including but not limited to:
          </p>
          <ul>
            <li>Amazon Associates Program (India & Global)</li>
            <li>Direct brand and manufacturer affiliate programs</li>
            <li>Sports nutrition and fitness retailer networks</li>
          </ul>

          <h2>FTC Compliance</h2>
          <p>
            This disclosure is made in compliance with the Federal Trade Commission (FTC)
            guidelines on endorsements and testimonials, and similar regulations in other
            jurisdictions.
          </p>

          <h2>Questions?</h2>
          <p>
            If you have questions about our affiliate relationships,{' '}
            <Link to="/contact">contact us</Link>.
          </p>
          <p className="text-caption text-muted">Last updated: September 2026</p>
        </div>
      </div>
    </main>
  );
}

export function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1 className="text-heading-xl">Privacy Policy</h1>
          <p className="text-body text-secondary" style={{ maxWidth: 540, marginTop: '0.5rem' }}>
            How FITPULSE collects, uses, and protects your information.
          </p>
        </div>
      </div>
      <div className="container legal-content">
        <div className="prose">
          <p className="text-caption text-muted">Last updated: September 2026</p>

          <h2>Information We Collect</h2>
          <p>FITPULSE may collect the following information:</p>
          <ul>
            <li><strong>Email address</strong> — if you subscribe to our newsletter</li>
            <li><strong>Usage data</strong> — pages visited, time spent, links clicked (via analytics tools)</li>
            <li><strong>Affiliate click data</strong> — which product links were clicked and which merchant was visited</li>
          </ul>

          <h2>Analytics</h2>
          <p>
            We use analytics tools (such as Google Analytics) to understand how visitors use our
            site. This data is aggregated and anonymised. You can opt out via browser settings or
            privacy-focused browser extensions.
          </p>

          <h2>Affiliate Tracking</h2>
          <p>
            When you click an affiliate link, you will be redirected to a third-party merchant
            website. Those sites have their own privacy policies that govern your data once you
            leave FITPULSE.
          </p>

          <h2>Cookies</h2>
          <p>
            We may use cookies for analytics and to remember your preferences. You can disable
            cookies in your browser settings, though this may affect some functionality.
          </p>

          <h2>Data Sharing</h2>
          <p>
            We do not sell your personal data to third parties. We may share aggregated,
            anonymised usage data with analytics providers.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of any personal
            data we hold. Contact us at the address below to exercise these rights.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related questions, <Link to="/contact">contact us</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}

export function TermsPage() {
  return (
    <main className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1 className="text-heading-xl">Terms & Conditions</h1>
          <p className="text-body text-secondary" style={{ maxWidth: 540, marginTop: '0.5rem' }}>
            The terms governing your use of the FITPULSE platform.
          </p>
        </div>
      </div>
      <div className="container legal-content">
        <div className="prose">
          <p className="text-caption text-muted">Last updated: September 2026</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By using FITPULSE, you agree to these Terms & Conditions. If you do not agree,
            please do not use this website.
          </p>

          <h2>Nature of the Service</h2>
          <p>
            FITPULSE is a product discovery and comparison platform. We do not sell products,
            process payments, or take responsibility for transactions completed on third-party
            merchant websites.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            Product information, pricing, and specifications are based on publicly available
            data and may not always reflect the most current information. Prices in particular
            change frequently. Always verify current pricing and specifications on the merchant's
            website before purchasing.
          </p>

          <h2>Fitness Tool Disclaimer</h2>
          <p>
            Fitness calculators and tools on FITPULSE are for educational purposes only. They
            are not medical advice and should not replace consultation with a qualified medical
            or fitness professional.
          </p>

          <h2>Affiliate Links</h2>
          <p>
            This site contains affiliate links. See our{' '}
            <Link to="/affiliate-disclosure">Affiliate Disclosure</Link> for full details.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            Content, design, and branding on FITPULSE are the property of FITPULSE and may not
            be reproduced without written permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            FITPULSE is provided "as is" without warranties of any kind. We are not liable for
            any damages arising from use of this website or reliance on information provided
            herein.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time. Continued use of FITPULSE
            after changes constitutes acceptance of the updated terms.
          </p>
        </div>
      </div>
    </main>
  );
}

export function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'contact_form_submit');
    }
    alert("Thanks for reaching out! We'll get back to you as soon as possible.");
    e.target.reset();
  };

  return (
    <main className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1 className="text-heading-xl">Contact Us</h1>
          <p className="text-body text-secondary" style={{ maxWidth: 540, marginTop: '0.5rem' }}>
            Questions, feedback, or partnership inquiries? We'd love to hear from you.
          </p>
        </div>
      </div>
      <div className="container legal-content">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="text-heading-md">Get In Touch</h2>
            <p className="text-body text-secondary">
              Whether you have a question about our recommendations, want to suggest a product, or
              are interested in working with us — reach out using the form.
            </p>

            <div className="contact-topics">
              <h3 className="text-heading-sm" style={{ marginBottom: 'var(--space-4)' }}>
                We can help with:
              </h3>
              {[
                { icon: '📦', label: 'Product recommendation requests' },
                { icon: '🤝', label: 'Brand partnerships & sponsored content' },
                { icon: '✏️', label: 'Content corrections or updates' },
                { icon: '🔗', label: 'Affiliate program inquiries' },
                { icon: '🐛', label: 'Bug reports & technical issues' },
              ].map((t) => (
                <div key={t.label} className="contact-topic">
                  <span>{t.icon}</span>
                  <span className="text-body-sm text-secondary">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="input-group">
                <label className="input-label" htmlFor="contact-name">Your Name</label>
                <input id="contact-name" className="input" type="text" placeholder="Jane Smith" required />
              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="contact-email">Email Address</label>
                <input id="contact-email" className="input" type="email" placeholder="jane@example.com" required />
              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="contact-subject">Subject</label>
                <select id="contact-subject" className="input">
                  <option>Product recommendation request</option>
                  <option>Partnership inquiry</option>
                  <option>Content correction</option>
                  <option>Technical issue</option>
                  <option>General question</option>
                </select>
              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="input contact-textarea"
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
              <p className="text-caption text-muted">
                We typically respond within 1–3 business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

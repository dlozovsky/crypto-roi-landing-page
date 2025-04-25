
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="policy-page">
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <div className="policy-content">
          <p className="mb-4">Last updated: April 25, 2025</p>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using the CryptoROI Calculator, you accept and agree to be bound by these Terms of Use.</p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
            <p>Permission is granted to temporarily use this website for personal, non-commercial purposes only.</p>
          </section>
        </div>
        <Link to="/" className="text-blue-500 hover:underline mt-8 inline-block">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Terms;

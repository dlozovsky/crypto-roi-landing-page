
import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="policy-page">
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="policy-content">
          <p className="mb-4">Last updated: April 25, 2025</p>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us when using the CryptoROI Calculator.</p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p>We use the collected information to provide and improve our services.</p>
          </section>
        </div>
        <Link to="/" className="text-blue-500 hover:underline mt-8 inline-block">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Privacy;


import React from 'react';
import { Link } from 'react-router-dom';

const Cookies = () => {
  return (
    <div className="policy-page">
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <div className="policy-content">
          <p className="mb-4">Last updated: April 25, 2025</p>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">1. What Are Cookies</h2>
            <p>Cookies are small text files that are stored on your computer when you visit our website.</p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">2. How We Use Cookies</h2>
            <p>We use cookies to enhance your experience and analyze our traffic.</p>
          </section>
        </div>
        <Link to="/" className="text-blue-500 hover:underline mt-8 inline-block">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Cookies;


import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="policy-page">
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="contact-content">
          <p className="mb-6">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          <div className="contact-info mb-8">
            <p className="mb-2">Email: support@cryptoroi.com</p>
            <p>Address: 123 Crypto Street, Digital City, DC 12345</p>
          </div>
        </div>
        <Link to="/" className="text-blue-500 hover:underline mt-8 inline-block">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Contact;

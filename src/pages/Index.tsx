
import React from 'react';
import "../styles.css";
import { Link } from 'react-router-dom';

const Index = () => {
  React.useEffect(() => {
    // JavaScript for fade-in effect
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {threshold: 0.1});

    document.querySelectorAll('.fade-in').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="crypto-landing-page">
      <header className="hero">
        <div className="container">
          <nav>
            <div className="logo">CryptoROI</div>
          </nav>
          <div className="hero-content">
            <h1>Crypto ROI Calculator</h1>
            <p className="hero-statement">Calculate your crypto gains with ease</p>
            <a href="https://robustcalculators.com/calculators/investment" className="cta-button">
              Try the advanced crypto ROI calculator now →
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="features fade-in">
          <div className="container">
            <h2>Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>BTC/ETH/Altcoin Support</h3>
                <p>Calculate ROI for all major cryptocurrencies</p>
              </div>
              <div className="feature-card">
                <h3>Real-time API Data</h3>
                <p>Get accurate, up-to-the-minute pricing data</p>
              </div>
              <div className="feature-card">
                <h3>Mobile Responsive</h3>
                <p>Calculate your ROI anywhere, anytime</p>
              </div>
              <div className="feature-card">
                <h3>Tax Estimate Included</h3>
                <p>Plan your trades with tax implications in mind</p>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits fade-in">
          <div className="container">
            <h2>Benefits</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Maximize Profits</h3>
                <p>Make informed decisions based on accurate calculations</p>
              </div>
              <div className="benefit-card">
                <h3>Track Smart Investments</h3>
                <p>Monitor your portfolio performance in real-time</p>
              </div>
              <div className="benefit-card">
                <h3>Plan Tax-Efficient Exits</h3>
                <p>Optimize your trading strategy for tax efficiency</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 CryptoROI Calculator. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-link">Terms of Use</Link>
              <Link to="/cookies" className="footer-link">Cookie Policy</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

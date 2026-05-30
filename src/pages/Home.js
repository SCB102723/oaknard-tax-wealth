import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function Home() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Tax Sale Investing, Simplified</h1>
        <p>
          A free reference guide covering tax lien and tax deed investing across the United States.
          No subscriptions. No paywalls. Just the information you need.
        </p>
        <div className="home-cta">
          <Link to="/states" className="cta-button primary">Top 10 States</Link>
          <Link to="/calendar" className="cta-button secondary">Auction Calendar</Link>
          <Link to="/resources" className="cta-button secondary">Resources</Link>
        </div>
      </div>

      <div className="home-explainer">
        <div className="explainer-card">
          <h2>What is a Tax Lien?</h2>
          <p>
            When a property owner fails to pay their property taxes, the government places a lien
            on the property. Investors can purchase that lien and earn interest — typically 8–36%
            annually — while the owner has a redemption period to pay back the debt. If they don't,
            the investor may eventually foreclose and take ownership.
          </p>
        </div>

        <div className="explainer-card">
          <h2>What is a Tax Deed?</h2>
          <p>
            In tax deed states, when taxes go unpaid, the government seizes the property and sells
            it outright at auction. The winning bidder receives a deed to the property directly.
            There's no waiting period — you own it when you win. Higher risk, higher potential reward.
          </p>
        </div>

        <div className="explainer-card">
          <h2>What is a Hybrid State?</h2>
          <p>
            Some states use both systems — they sell tax liens but also allow for tax deed sales
            under certain conditions. Texas and Georgia are common examples. The rules vary by
            county, so always verify locally before bidding.
          </p>
        </div>
      </div>

      <div className="home-notice">
        <p>
          This site is for informational purposes only. Always consult a licensed attorney or
          financial advisor before making investment decisions.
        </p>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import './ResourcesPage.css';

const LINKS = [
  { category: 'Associations & Organizations', items: [
    { title: 'National Tax Lien Association (NTLA)', url: 'https://www.ntlainfo.org/' },
    { title: 'US Tax Lien Association', url: 'https://www.ustaxlienassociation.com/' },
    { title: 'Tax Sale Resources', url: 'https://www.taxsaleresources.com/' },
  ]},
  { category: 'Learning & Education', items: [
    { title: 'Tax Lien University', url: 'https://www.taxlienuniversity.com/' },
    { title: 'Investopedia – Tax Lien Definition', url: 'https://www.investopedia.com/terms/t/tax-lien.asp' },
    { title: 'Nolo – Tax Lien Basics', url: 'https://www.nolo.com/legal-encyclopedia/tax-liens.html' },
    { title: 'Bankrate – Tax Lien Investing', url: 'https://www.bankrate.com/real-estate/tax-lien-investing/' },
    { title: 'Forbes – What You Need to Know About Tax Lien Investments', url: 'https://www.forbes.com/sites/forbesfinancecouncil/2021/07/12/what-you-need-to-know-about-tax-lien-investments/' },
  ]},
  { category: 'Auction Platforms', items: [
    { title: 'Bid4Assets', url: 'https://www.bid4assets.com/' },
    { title: 'GovEase', url: 'https://www.govease.com/' },
    { title: 'RealTaxDeed', url: 'https://www.realtaxdeed.com/' },
    { title: 'SRI (Indiana)', url: 'https://www.sriservices.com/' },
    { title: 'Auction.com – Tax Deed Sales', url: 'https://www.auction.com/blog/tax-deed-sales/' },
  ]},
  { category: 'Government & Legal', items: [
    { title: 'IRS – Understanding a Federal Tax Lien', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/understanding-a-federal-tax-lien' },
    { title: 'PropertyRadar – Tax Lien Investing', url: 'https://www.propertyradar.com/blog/tax-lien-investing' },
  ]},
];

const STATES = [
  { name: 'Alabama', type: 'Lien' },
  { name: 'Alaska', type: 'Deed' },
  { name: 'Arizona', type: 'Lien' },
  { name: 'Arkansas', type: 'Deed' },
  { name: 'California', type: 'Deed' },
  { name: 'Colorado', type: 'Lien' },
  { name: 'Connecticut', type: 'Lien' },
  { name: 'Delaware', type: 'Deed' },
  { name: 'Florida', type: 'Lien' },
  { name: 'Georgia', type: 'Hybrid' },
  { name: 'Hawaii', type: 'Deed' },
  { name: 'Idaho', type: 'Deed' },
  { name: 'Illinois', type: 'Lien' },
  { name: 'Indiana', type: 'Lien' },
  { name: 'Iowa', type: 'Hybrid' },
  { name: 'Kansas', type: 'Deed' },
  { name: 'Kentucky', type: 'Lien' },
  { name: 'Louisiana', type: 'Deed' },
  { name: 'Maine', type: 'Deed' },
  { name: 'Maryland', type: 'Lien' },
  { name: 'Massachusetts', type: 'Deed' },
  { name: 'Michigan', type: 'Deed' },
  { name: 'Minnesota', type: 'Deed' },
  { name: 'Mississippi', type: 'Lien' },
  { name: 'Missouri', type: 'Deed' },
  { name: 'Montana', type: 'Deed' },
  { name: 'Nebraska', type: 'Lien' },
  { name: 'Nevada', type: 'Deed' },
  { name: 'New Hampshire', type: 'Deed' },
  { name: 'New Jersey', type: 'Lien' },
  { name: 'New Mexico', type: 'Deed' },
  { name: 'New York', type: 'Lien' },
  { name: 'North Carolina', type: 'Deed' },
  { name: 'North Dakota', type: 'Deed' },
  { name: 'Ohio', type: 'Lien' },
  { name: 'Oklahoma', type: 'Deed' },
  { name: 'Oregon', type: 'Deed' },
  { name: 'Pennsylvania', type: 'Lien' },
  { name: 'Rhode Island', type: 'Lien' },
  { name: 'South Carolina', type: 'Lien' },
  { name: 'South Dakota', type: 'Deed' },
  { name: 'Tennessee', type: 'Deed' },
  { name: 'Texas', type: 'Hybrid' },
  { name: 'Utah', type: 'Deed' },
  { name: 'Vermont', type: 'Deed' },
  { name: 'Virginia', type: 'Deed' },
  { name: 'Washington', type: 'Deed' },
  { name: 'West Virginia', type: 'Lien' },
  { name: 'Wisconsin', type: 'Deed' },
  { name: 'Wyoming', type: 'Deed' },
];

const TYPE_COLORS = {
  Lien: '#2563eb',
  Deed: '#16a34a',
  Hybrid: '#d97706',
};

function Resources() {
  return (
    <div className="resources-page">
      <div className="resources-header">
        <h1>Resources</h1>
        <p>Curated links and reference data for tax sale investing.</p>
      </div>

      <section className="resources-section">
        <h2>Links by Category</h2>
        {LINKS.map((group) => (
          <div key={group.category} className="link-group">
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((link) => (
                <li key={link.title}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="states-section">
        <h2>All 50 States — Sale Type</h2>
        <div className="states-grid">
          {STATES.map((state) => (
            <div key={state.name} className="state-row">
              <span className="state-name">{state.name}</span>
              <span
                className="state-badge"
                style={{ color: TYPE_COLORS[state.type] }}
              >
                {state.type}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resources;

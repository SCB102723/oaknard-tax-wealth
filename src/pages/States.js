import React, { useState } from 'react';
import './StatesPage.css';

const TOP_10_STATES = [
  {
    name: 'Florida',
    type: 'Lien',
    interestRate: '18% per year (bid down)',
    redemptionPeriod: '2 years',
    auctionTiming: 'May–June (varies by county)',
    bidMethod: 'Bid-down interest rate — lowest rate wins',
    minBid: 'Back taxes + fees',
    notes: 'One of the most popular lien states. Large volume of auctions. Many counties now hold auctions online via RealTaxDeed.com or GovEase.',
    officialLink: 'https://floridarevenue.com/property/Pages/default.aspx',
  },
  {
    name: 'Texas',
    type: 'Hybrid',
    interestRate: '25–50% penalty (not annual interest)',
    redemptionPeriod: '6 months (non-homestead) / 2 years (homestead)',
    auctionTiming: 'Monthly, first Tuesday of each month',
    bidMethod: 'Premium bid — highest bid wins the deed',
    minBid: 'Judgment amount (taxes + penalties + fees)',
    notes: 'Texas sells tax deeds, not liens. The penalty is a one-time fee owed if the owner redeems. After redemption period, investor keeps the property. Competitive market.',
    officialLink: 'https://comptroller.texas.gov/taxes/property-tax/',
  },
  {
    name: 'Illinois',
    type: 'Lien',
    interestRate: 'Up to 36% per 6-month period (bid down)',
    redemptionPeriod: '2–3 years',
    auctionTiming: 'October–November (varies by county)',
    bidMethod: 'Bid-down penalty — lowest percentage wins',
    minBid: 'Delinquent tax amount',
    notes: 'Very high potential returns but long redemption periods. Cook County (Chicago) is one of the largest tax lien sales in the country. Requires careful due diligence on property condition.',
    officialLink: 'https://www.cookcountytreasurer.com/annualtaxsale.aspx',
  },
  {
    name: 'New Jersey',
    type: 'Lien',
    interestRate: 'Up to 18% + 6% penalty on amounts over $10k',
    redemptionPeriod: '2 years (can vary)',
    auctionTiming: 'Year-round (each municipality sets its own date)',
    bidMethod: 'Bid-down interest, then premium bid if rate hits 0%',
    minBid: 'Outstanding tax balance',
    notes: 'Unique system where municipalities conduct their own auctions independently. Requires tracking hundreds of individual municipal calendars. High returns but complex logistics.',
    officialLink: 'https://www.tctanj.org/',
  },
  {
    name: 'Arizona',
    type: 'Lien',
    interestRate: 'Up to 16% per year (bid down)',
    redemptionPeriod: '3 years',
    auctionTiming: 'February (most counties)',
    bidMethod: 'Bid-down interest rate',
    minBid: 'Delinquent tax amount',
    notes: 'Straightforward lien state with a centralized system. Most counties now use online auctions. Good for beginners due to consistent rules across counties.',
    officialLink: 'https://treasurer.maricopa.gov/taxlienweb/',
  },
  {
    name: 'Georgia',
    type: 'Hybrid',
    interestRate: '20% penalty (not annual)',
    redemptionPeriod: '1 year',
    auctionTiming: 'First Tuesday of each month',
    bidMethod: 'Premium bid — highest bid wins',
    minBid: 'Delinquent taxes + fees',
    notes: 'Georgia holds tax deed sales but the owner has 1 year to redeem by paying the buyer back plus the 20% penalty. After 1 year with no redemption, the investor has clear title. Monthly sales in most counties.',
    officialLink: 'https://fultoncountyga.gov/inside-fulton-county/fulton-county-departments/sheriff/tax-sales',
  },
  {
    name: 'Indiana',
    type: 'Lien',
    interestRate: '10–15% (varies)',
    redemptionPeriod: '1 year',
    auctionTiming: 'August–October',
    bidMethod: 'SRI/Bid4Assets platform — online auctions',
    minBid: 'Minimum bid set by county',
    notes: 'Indiana uses a statewide online platform (SRI) making it easy to participate from anywhere. Shorter redemption period than many lien states. After 1 year, investor can petition for deed.',
    officialLink: 'https://www.sriservices.com/',
  },
  {
    name: 'Maryland',
    type: 'Lien',
    interestRate: '6–24% (varies by county)',
    redemptionPeriod: '6 months–2 years (varies)',
    auctionTiming: 'May–June (most counties)',
    bidMethod: 'Premium bid above lien amount',
    minBid: 'Outstanding tax lien',
    notes: "Baltimore City has some of the highest interest rates (18–24%). Montgomery and Prince George's counties are more competitive with lower rates. Each county operates independently.",
    officialLink: 'https://dat.maryland.gov/realproperty/Pages/default.aspx',
  },
  {
    name: 'Ohio',
    type: 'Lien',
    interestRate: '18% per year',
    redemptionPeriod: '1 year (after certificate issuance)',
    auctionTiming: 'Varies by county (year-round)',
    bidMethod: 'Premium bid or set price depending on county',
    minBid: 'Delinquent tax amount',
    notes: 'Ohio sells tax lien certificates. After the redemption period, investors can foreclose. Franklin County (Columbus) and Cuyahoga County (Cleveland) are the largest markets.',
    officialLink: 'https://treasurer.franklincountyohio.gov/delinquent-taxes/tax-lien-sale/',
  },
  {
    name: 'Colorado',
    type: 'Lien',
    interestRate: '9–15% (CPI-adjusted annually)',
    redemptionPeriod: '3 years',
    auctionTiming: 'September–November',
    bidMethod: 'Bid-down interest rate',
    minBid: 'Delinquent tax amount',
    notes: 'Colorado uses a bid-down system similar to Florida. The interest rate is set by the state based on inflation (CPI) plus a premium. Denver and El Paso counties are the most active.',
    officialLink: 'https://treasurer.elpasoco.com/treasurer-elpasoco-com/tax-lien-sale/',
  },
];

const TYPE_COLORS = {
  Lien: '#2563eb',
  Deed: '#16a34a',
  Hybrid: '#d97706',
};

function StateCard({ state }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="state-card">
      <div className="state-card-header" onClick={() => setExpanded(!expanded)}>
        <div className="state-card-title">
          <h2>{state.name}</h2>
          <span
            className="state-type-badge"
            style={{ backgroundColor: TYPE_COLORS[state.type] }}
          >
            {state.type}
          </span>
        </div>
        <div className="state-card-summary">
          <span>{state.interestRate}</span>
          <span>{state.redemptionPeriod} redemption</span>
        </div>
        <button className="expand-btn">{expanded ? '▲ Less' : '▼ More'}</button>
      </div>

      {expanded && (
        <div className="state-card-detail">
          <div className="detail-grid">
            <div className="detail-item">
              <label>Interest / Return</label>
              <span>{state.interestRate}</span>
            </div>
            <div className="detail-item">
              <label>Redemption Period</label>
              <span>{state.redemptionPeriod}</span>
            </div>
            <div className="detail-item">
              <label>Auction Timing</label>
              <span>{state.auctionTiming}</span>
            </div>
            <div className="detail-item">
              <label>Bid Method</label>
              <span>{state.bidMethod}</span>
            </div>
            <div className="detail-item">
              <label>Minimum Bid</label>
              <span>{state.minBid}</span>
            </div>
          </div>
          <p className="state-notes">{state.notes}</p>
          <a
            href={state.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="official-link"
          >
            Official State Resource →
          </a>
        </div>
      )}
    </div>
  );
}

function States() {
  return (
    <div className="states-page">
      <div className="states-header">
        <h1>Top 10 States for Tax Sale Investing</h1>
        <p>
          These states offer the most active markets, highest returns, or most investor-friendly
          laws. Click any state to expand full details.
        </p>
      </div>

      <div className="legend">
        <span style={{ color: TYPE_COLORS.Lien }}>● Lien</span>
        <span style={{ color: TYPE_COLORS.Deed }}>● Deed</span>
        <span style={{ color: TYPE_COLORS.Hybrid }}>● Hybrid</span>
      </div>

      <div className="states-list">
        {TOP_10_STATES.map((state) => (
          <StateCard key={state.name} state={state} />
        ))}
      </div>
    </div>
  );
}

export default States;

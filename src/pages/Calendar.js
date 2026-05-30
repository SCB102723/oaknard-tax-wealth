import React, { useState } from 'react';
import './CalendarPage.css';

const TYPE_COLORS = {
  Lien: '#2563eb',
  Deed: '#16a34a',
  Hybrid: '#d97706',
};

// Counties/states that hold sales every month (or nearly so)
const RECURRING = [
  {
    state: 'TX', county: 'Harris County', type: 'Hybrid',
    schedule: 'First Tuesday of every month, 10 AM – 4 PM',
    platform: 'County Tax Sale App', platformUrl: 'https://countytaxsaleapp.org/',
    notes: 'Bayou City Event Center; largest volume in Texas',
  },
  {
    state: 'TX', county: 'Dallas County', type: 'Hybrid',
    schedule: 'First Tuesday of every month',
    platform: 'lgbs.com', platformUrl: 'https://www.taxsales.lgbs.com/',
    notes: 'Courthouse auction; list posted on Public Information board',
  },
  {
    state: 'TX', county: 'Bexar County', type: 'Hybrid',
    schedule: 'First Tuesday of every month, 10 AM',
    platform: 'Auction.com', platformUrl: 'https://www.auction.com/',
    notes: 'Courthouse west side; San Antonio metro',
  },
  {
    state: 'GA', county: 'Fulton County', type: 'Hybrid',
    schedule: 'First Tuesday of every month, 10 AM – 4 PM',
    platform: 'GTSweb', platformUrl: 'https://www.gtsweb.com/fultoncounty',
    notes: 'Atlanta metro; online bidding available',
  },
  {
    state: 'GA', county: 'DeKalb County', type: 'Hybrid',
    schedule: 'First Tuesday of every month, 10 AM',
    platform: 'Courthouse (in-person)', platformUrl: null,
    notes: 'April – December typical run; verify locally',
  },
  {
    state: 'GA', county: 'Gwinnett County', type: 'Hybrid',
    schedule: 'First Tuesday of every month',
    platform: 'Courthouse (in-person)', platformUrl: null,
    notes: '4-week advance notice in Gwinnett Daily Post required by law',
  },
  {
    state: 'FL', county: 'Hillsborough County', type: 'Deed',
    schedule: 'Thursdays at 10 AM (ongoing)',
    platform: 'RealAuction (online)', platformUrl: 'https://hillsclerk.com/',
    notes: 'Tampa area; deeds only, very active market',
  },
  {
    state: 'FL', county: 'Miami-Dade County', type: 'Lien',
    schedule: 'Lien certificates starting June; deed auctions ongoing',
    platform: 'Online (county site)', platformUrl: 'https://www.miamidadeclerk.gov/clerk/property-tax-deeds.page',
    notes: 'Largest lien volume in Florida; competitive bid-down environment',
  },
];

// Annual auctions organized by month (1 = Jan … 12 = Dec)
const ANNUAL = [
  {
    month: 2, state: 'AZ', county: 'Maricopa County', type: 'Lien',
    window: '~February 10 (annual)',
    platform: 'arizonataxsale.com', platformUrl: 'https://treasurer.maricopa.gov/taxlienweb/',
    notes: 'Largest AZ sale; $500 deposit required; fully online',
  },
  {
    month: 2, state: 'AZ', county: 'Pima County', type: 'Lien',
    window: 'February (annual)',
    platform: 'RealAuction (online)', platformUrl: 'https://www.realtaxdeed.com/',
    notes: 'Tucson metro; bid-down interest rate',
  },
  {
    month: 2, state: 'AZ', county: 'Coconino County', type: 'Lien',
    window: '~February 10 (annual)',
    platform: 'RealAuction (online)', platformUrl: 'https://coconino.arizonataxsale.com',
    notes: 'Flagstaff area; same window as Maricopa',
  },
  {
    month: 5, state: 'MD', county: "Prince George's County", type: 'Lien',
    window: 'Second Monday in May (annual)',
    platform: 'Online', platformUrl: 'https://taxsale.princegeorgescountymd.gov/',
    notes: 'Registration opens first Monday of May; competitive premiums',
  },
  {
    month: 5, state: 'FL', county: 'Statewide (most counties)', type: 'Lien',
    window: 'May – June (varies by county)',
    platform: 'GovEase / RealTaxDeed', platformUrl: 'https://www.govease.com/',
    notes: 'Annual lien certificate sale; 18% max rate bid down to lowest',
  },
  {
    month: 6, state: 'NJ', county: 'Statewide (all 565 municipalities)', type: 'Lien',
    window: 'Year-round — majority fall Oct – Nov, some summer',
    platform: 'Varies by municipality', platformUrl: 'https://www.tctanj.org/',
    notes: 'Each municipality sets its own date; track TCTANJ calendar',
  },
  {
    month: 8, state: 'MD', county: 'Baltimore County', type: 'Lien',
    window: 'August – September (annual)',
    platform: 'Online', platformUrl: null,
    notes: '18–24% rates in Baltimore City; one of the highest in state',
  },
  {
    month: 9, state: 'IN', county: 'Marion County', type: 'Lien',
    window: 'Late August – October (annual)',
    platform: 'GovEase', platformUrl: 'https://www.govease.com/',
    notes: 'Indianapolis metro; $2,500 deposit; fully online',
  },
  {
    month: 9, state: 'IN', county: 'Lake County', type: 'Lien',
    window: 'September (annual)',
    platform: 'SRI / zeusauction.com', platformUrl: 'https://www.sriservices.com/',
    notes: 'Gary/Hammond area; online via SRI platform',
  },
  {
    month: 9, state: 'IN', county: 'Hamilton County', type: 'Lien',
    window: 'September (annual)',
    platform: 'SRI / sriservices.com', platformUrl: 'https://www.sriservices.com/',
    notes: 'Carmel/Fishers area; fastest-growing county in IN',
  },
  {
    month: 10, state: 'OH', county: 'Cuyahoga County', type: 'Lien',
    window: 'October – November (annual)',
    platform: 'Bulk sale — call county', platformUrl: null,
    notes: 'Cleveland metro; sold in bulk pools, not individual certs',
  },
  {
    month: 10, state: 'OH', county: 'Franklin County', type: 'Lien',
    window: 'October – November (annual)',
    platform: 'Online', platformUrl: 'https://treasurer.franklincountyohio.gov/delinquent-taxes/tax-lien-sale/',
    notes: 'Columbus metro; individual certificate sale',
  },
  {
    month: 10, state: 'OH', county: 'Hamilton County', type: 'Lien',
    window: 'October (2nd week, annual)',
    platform: 'Call county (513) 946-4800', platformUrl: null,
    notes: 'Cincinnati metro; bulk format',
  },
  {
    month: 10, state: 'CO', county: 'El Paso County', type: 'Lien',
    window: '~October 22 (annual)',
    platform: 'RealAuction (online)', platformUrl: 'https://treasurer.elpasoco.com/treasurer-elpasoco-com/tax-lien-sale/',
    notes: 'Colorado Springs; 14% interest rate; registration closes ~Oct 15',
  },
  {
    month: 11, state: 'CO', county: 'Arapahoe County', type: 'Lien',
    window: '~November 6 (annual)',
    platform: 'County site (online)', platformUrl: 'https://www.arapahoeco.gov/your_county/county_departments/treasurer/tax_lien_sale/',
    notes: 'Denver suburb; 14% interest rate',
  },
  {
    month: 11, state: 'CO', county: 'Denver County', type: 'Lien',
    window: 'November (annual)',
    platform: 'PV One (online)', platformUrl: 'https://app.pvone.io/auction_info/Denver-CO',
    notes: 'CPI-adjusted rate (typically 9–15%); competitive',
  },
  {
    month: 11, state: 'IL', county: 'DuPage County', type: 'Lien',
    window: '~November 19 (annual)',
    platform: 'In-person — Wheaton, IL', platformUrl: null,
    notes: 'DuPage County Admin Building; registration opens ~Oct 1',
  },
  {
    month: 12, state: 'IL', county: 'Cook County', type: 'Lien',
    window: 'December (annual)',
    platform: 'cooktaxsale.com', platformUrl: 'https://www.cooktaxsale.com/',
    notes: 'Largest lien sale in the US by volume; 8:30 AM – 5 PM daily; up to 36% per 6-month period',
  },
];

const MONTH_NAMES = [
  '', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function RecurringCard({ entry }) {
  return (
    <div className="cal-card">
      <div className="cal-card-header">
        <div className="cal-card-title">
          <span className="cal-state-tag">{entry.state}</span>
          <span className="cal-county">{entry.county}</span>
          <span className="cal-type-badge" style={{ backgroundColor: TYPE_COLORS[entry.type] }}>
            {entry.type}
          </span>
        </div>
        <div className="cal-schedule">{entry.schedule}</div>
      </div>
      <div className="cal-card-body">
        <p className="cal-notes">{entry.notes}</p>
        {entry.platformUrl ? (
          <a href={entry.platformUrl} target="_blank" rel="noopener noreferrer" className="cal-platform-link">
            {entry.platform} →
          </a>
        ) : (
          <span className="cal-platform-text">{entry.platform}</span>
        )}
      </div>
    </div>
  );
}

function AnnualEntry({ entry }) {
  return (
    <div className="cal-row">
      <div className="cal-row-left">
        <span className="cal-state-tag">{entry.state}</span>
        <div className="cal-row-county">
          <span className="cal-county">{entry.county}</span>
          <span className="cal-type-badge" style={{ backgroundColor: TYPE_COLORS[entry.type] }}>
            {entry.type}
          </span>
        </div>
        <div className="cal-window">{entry.window}</div>
      </div>
      <div className="cal-row-right">
        <p className="cal-notes">{entry.notes}</p>
        {entry.platformUrl ? (
          <a href={entry.platformUrl} target="_blank" rel="noopener noreferrer" className="cal-platform-link">
            {entry.platform} →
          </a>
        ) : (
          <span className="cal-platform-text">{entry.platform}</span>
        )}
      </div>
    </div>
  );
}

function Calendar() {
  const [stateFilter, setStateFilter] = useState('All');

  const states = ['All', ...Array.from(new Set([
    ...RECURRING.map(e => e.state),
    ...ANNUAL.map(e => e.state),
  ])).sort()];

  const filteredRecurring = stateFilter === 'All'
    ? RECURRING
    : RECURRING.filter(e => e.state === stateFilter);

  const filteredAnnual = stateFilter === 'All'
    ? ANNUAL
    : ANNUAL.filter(e => e.state === stateFilter);

  // Group annual by month
  const byMonth = {};
  filteredAnnual.forEach(entry => {
    if (!byMonth[entry.month]) byMonth[entry.month] = [];
    byMonth[entry.month].push(entry);
  });
  const sortedMonths = Object.keys(byMonth).map(Number).sort((a, b) => a - b);

  return (
    <div className="calendar-page">
      <div className="calendar-header">
        <h1>Auction Calendar</h1>
        <p>
          Rough annual windows and platforms for the largest counties in each top state.
          Exact dates shift year to year — always verify with the county treasurer before registering.
        </p>
        <div className="cal-filter">
          <label>Filter by state:</label>
          <div className="cal-filter-buttons">
            {states.map(s => (
              <button
                key={s}
                className={`cal-filter-btn${stateFilter === s ? ' active' : ''}`}
                onClick={() => setStateFilter(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredRecurring.length > 0 && (
        <section className="cal-section">
          <h2 className="cal-section-title recurring-title">Monthly / Recurring Sales</h2>
          <p className="cal-section-sub">These counties hold sales every month (or nearly every month) year-round.</p>
          <div className="cal-cards">
            {filteredRecurring.map((e, i) => <RecurringCard key={i} entry={e} />)}
          </div>
        </section>
      )}

      {sortedMonths.length > 0 && (
        <section className="cal-section">
          <h2 className="cal-section-title">Annual Sales by Month</h2>
          {sortedMonths.map(month => (
            <div key={month} className="cal-month-group">
              <div className="cal-month-label">{MONTH_NAMES[month]}</div>
              <div className="cal-month-entries">
                {byMonth[month].map((e, i) => <AnnualEntry key={i} entry={e} />)}
              </div>
            </div>
          ))}
        </section>
      )}

      {filteredRecurring.length === 0 && sortedMonths.length === 0 && (
        <p className="cal-empty">No entries for selected state.</p>
      )}

      <div className="cal-disclaimer">
        Dates are approximate and based on publicly available county records as of 2025–2026.
        Always confirm registration deadlines and auction dates directly with the county treasurer's office.
      </div>
    </div>
  );
}

export default Calendar;

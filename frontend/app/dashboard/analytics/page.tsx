'use client';

import React, { useState } from 'react';
import './analytics.css';

type TimeRange = '1D' | '1W' | '1M' | 'YTD' | 'All';

const TIME_RANGES: TimeRange[] = ['1D', '1W', '1M', 'YTD', 'All'];

export default function AnalyticsPage() {
  const [activeRange, setActiveRange] = useState<TimeRange>('1M');

  return (
    <div className="analytics">
      {/* ── Page header ── */}
      <div className="analytics__header">
        <div className="analytics__title-group">
          <h1 className="analytics__title">Analytics</h1>
          <p className="analytics__subtitle">
            Track your savings performance, yield history, and on-chain activity.
          </p>
        </div>

        {/* ── Time-range filter ── */}
        <div className="analytics__filter" role="group" aria-label="Time range filter">
          {TIME_RANGES.map((range) => (
            <button
              key={range}
              className={`analytics__filter-btn${activeRange === range ? ' analytics__filter-btn--active' : ''}`}
              onClick={() => setActiveRange(range)}
              aria-pressed={activeRange === range}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

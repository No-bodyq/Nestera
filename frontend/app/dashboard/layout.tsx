import React from 'react';
import './dashboard.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dash">
      {/* ── Sidebar ── */}
      <aside className="dash__sidebar">
        <div className="dash__logo">
          <span className="dash__logo-mark">N</span>
          <span className="dash__logo-text">Nestera</span>
        </div>

        <nav className="dash__nav" aria-label="Dashboard navigation">
          {[
            { label: 'Overview', href: '/dashboard' },
            { label: 'Analytics', href: '/dashboard/analytics' },
            { label: 'Savings', href: '/dashboard/savings' },
            { label: 'Governance', href: '/dashboard/governance' },
            { label: 'Settings', href: '/dashboard/settings' },
          ].map(({ label, href }) => (
            <a key={href} href={href} className="dash__nav-link">
              {label}
            </a>
          ))}
        </nav>
      </aside>

      {/* ── Main content area ── */}
      <main className="dash__main">{children}</main>
    </div>
  );
}

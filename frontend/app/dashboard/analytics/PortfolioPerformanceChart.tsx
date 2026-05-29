"use client";

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { TrendingUp, MoreHorizontal } from "lucide-react";

/* ── Sample data matching the mockup date range ─────────────────────── */
const chartData = [
  { date: "Oct 01", value: 118200 },
  { date: "Oct 03", value: 119800 },
  { date: "Oct 05", value: 119500 },
  { date: "Oct 07", value: 120100 },
  { date: "Oct 09", value: 119900 },
  { date: "Oct 10", value: 120800 },
  { date: "Oct 12", value: 121200 },
  { date: "Oct 14", value: 120600 },
  { date: "Oct 16", value: 121800 },
  { date: "Oct 18", value: 122300 },
  { date: "Oct 20", value: 123100 },
  { date: "Oct 22", value: 123800 },
  { date: "Oct 25", value: 124500 },
  { date: "Oct 27", value: 124200 },
  { date: "Oct 30", value: 124800 },
  { date: "Nov 01", value: 124592 },
];

/* ── Custom Tooltip ─────────────────────────────────────────────────── */
interface TooltipPayloadItem {
  value: number;
  payload: { date: string; value: number };
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}) {
  if (!active || !payload || payload.length === 0) return null;

  const { date, value } = payload[0].payload;

  return (
    <div className="bg-[rgba(8,20,24,0.95)] border border-[rgba(0,242,254,0.3)] rounded-lg px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
      <p className="m-0 text-[11px] text-[#5e8c96] mb-1">
        {date}, 2023
      </p>
      <p className="m-0 text-lg font-bold text-white">
        $
        {value.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    </div>
  );
}

/* ── Custom Active Dot ──────────────────────────────────────────────── */
function ActiveDot(props: { cx?: number; cy?: number }) {
  const { cx = 0, cy = 0 } = props;
  return (
    <g>
      {/* Outer glow */}
      <circle cx={cx} cy={cy} r={10} fill="rgba(0,242,254,0.15)" />
      {/* Ring */}
      <circle
        cx={cx}
        cy={cy}
        r={5}
        fill="#081418"
        stroke="#00f2fe"
        strokeWidth={2}
      />
      {/* Vertical guide line */}
      <line
        x1={cx}
        y1={cy + 10}
        x2={cx}
        y2={300}
        stroke="rgba(0,242,254,0.25)"
        strokeWidth={1}
        strokeDasharray="3 3"
      />
    </g>
  );
}

/* ── Main Component ─────────────────────────────────────────────────── */
export default function PortfolioPerformanceChart() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<div
      className="relative overflow-hidden rounded-2xl border border-[rgba(8,120,120,0.12)] bg-linear-to-b from-[rgba(6,18,20,0.85)] to-[rgba(4,12,14,0.75)]"
    >
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="flex items-start justify-between px-6 pt-6 pb-2">
        {/* Left section */}
        <div>
          <p className="text-[11px] tracking-[0.15em] uppercase m-0 mb-1 text-[#5e8c96]">
            Total Portfolio Value
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-[32px] font-bold m-0 leading-tight text-white">
              $124,592.45
            </h2>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold bg-[rgba(0,242,254,0.1)] text-[#00f2fe] border border-[rgba(0,242,254,0.15)]">
              <TrendingUp size={12} />
              +12.4%
            </span>
          </div>
        </div>

        {/* Right – overflow menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-1.5 rounded-lg transition-colors cursor-pointer text-[#5e8c96] hover:bg-[rgba(0,242,254,0.08)]"
          aria-label="More options"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* ── Chart ──────────────────────────────────────────────────── */}
      <div className="w-full h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 24, bottom: 0, left: 24 }}
          >
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00f2fe" stopOpacity={0.25} />
                <stop offset="60%" stopColor="#00f2fe" stopOpacity={0.06} />
                <stop offset="100%" stopColor="#00f2fe" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(94,140,150,0.07)"
              vertical={false}
            />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#3d6a75", fontSize: 11 }}
              dy={10}
              interval={1}
            />

            <YAxis hide domain={["dataMin - 2000", "dataMax + 1000"]} />

            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#00f2fe"
              strokeWidth={2}
              fill="url(#areaGrad)"
              activeDot={<ActiveDot />}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

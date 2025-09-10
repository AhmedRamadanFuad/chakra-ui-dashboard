import { cn } from "../../../lib/utils";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", uv: 500, pv: 200 },
  { month: "Feb", uv: 200, pv: 200 },
  { month: "Mar", uv: 250, pv: 300 },
  { month: "Apr", uv: 400, pv: 250 },
  { month: "May", uv: 350, pv: 350 },
  { month: "Jun", uv: 500, pv: 300 },
  { month: "Jul", uv: 400, pv: 250 },
  { month: "Aug", uv: 300, pv: 200 },
  { month: "Sep", uv: 350, pv: 150 },
  { month: "Oct", uv: 200, pv: 200 },
  { month: "Nov", uv: 400, pv: 300 },
  { month: "Dec", uv: 450, pv: 180 },
];

export default function SalesOverview() {
  return (
    <div
      className={cn(
        "bg-white dark:bg-[#1a202c] rounded-2xl p-6 shadow w-full "
      )}
    >
      <div className="mb-2">
        <div className="font-bold text-lg text-gray-800 dark:text-gray-100">
          Sales overview
        </div>
        <div className="text-xs text-[#4fd1c5] font-semibold flex items-center gap-1">
          <span>(+5)</span>
          <span className="text-[#4fd1c5]">more</span>
          <span className="text-gray-400 font-normal">in 2021</span>
        </div>
      </div>
      <div className="md:h-[445px] h-[100px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: -33, bottom: -14 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4fd1c5" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#4fd1c5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22223b" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#22223b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e5e5"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#b0b0b0", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#b0b0b0", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                background: "white",
                borderRadius: 12,
                border: "none",
                boxShadow: "0 2px 8px #0001",
              }}
              labelStyle={{ color: "#22223b", fontWeight: 600 }}
              itemStyle={{ color: "#4fd1c5" }}
            />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#4fd1c5"
              fillOpacity={1}
              fill="url(#colorUv)"
              strokeWidth={3}
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#22223b"
              fillOpacity={1}
              fill="url(#colorPv)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

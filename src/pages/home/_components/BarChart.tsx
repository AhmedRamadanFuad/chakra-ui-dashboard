"use client";

import { BarChart, Bar, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { cn } from "../../../lib/utils";
import {
  BadgeDollarSign,
  SquareMousePointer,
  StretchHorizontal,
  Users,
} from "lucide-react";

const data = [
  { value: 350 },
  { value: 220 },
  { value: 100 },
  { value: 280 },
  { value: 520 },
  { value: 430 },
  { value: 480 },
  { value: 300 },
  { value: 150 },
];

const stats = [
  {
    label: "Users",
    value: "32,984",
    icon: <Users className="size-[13px] text-white" />,
    progress: 80,
    color: "#4fd1c5",
  },
  {
    label: "Clicks",
    value: "2,42m",
    icon: <SquareMousePointer className="size-[13px] text-white" />,
    progress: 60,
    color: "#4fd1c5",
  },
  {
    label: "Sales",
    value: "2,400$",
    icon: <BadgeDollarSign className="size-[13px] text-white" />,
    progress: 50,
    color: "#4fd1c5",
  },
  {
    label: "Items",
    value: "320",
    icon: <StretchHorizontal className="size-[13px] text-white" />,
    progress: 90,
    color: "#4fd1c5",
  },
];

function ChartBar() {
  return (
    <div className="p-4 bg-white rounded-[15px] w-full">
      <div className="w-full h-[170px] md:h-[250px] rounded-2xl bg-gradient-to-r from-[#2c3466] to-[#0b0d14] md:p-[30px] p-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <YAxis
              stroke="white"
              tick={{ fill: "white", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickMargin={15}
              domain={[0, 500]}
              ticks={[0, 0, 100, 200, 300, 400, 500]}
            />

            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.1)" }}
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.7)",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontSize: "12px",
                padding: "5px 10px",
              }}
              labelFormatter={() => ""}
              formatter={(value: number) => [`${value}`, "User"]}
            />

            <Bar
              dataKey="value"
              fill="white"
              barSize={7}
              radius={15}
              activeBar={{ fill: "#4fd1c5" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 mb-[62px]">
        <h3 className="text-lg font-bold text-secondary">Active Users</h3>
        <span className="text-accent text-sm">
          <span className="text-green-400">(+23)</span> than last week
        </span>
      </div>
      <div className="grid min-[500px]:grid-cols-2 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={cn(
              "bg-white dark:bg-[#1a202c] rounded-xl shadow p-4 flex-1 min-w-[150px] "
            )}
          >
            <div className="flex items-center gap-2">
              <div
                className="rounded-md p-2 flex items-center justify-center"
                style={{ background: stat.color }}
              >
                {/* <stat.icon className="text-white w-5 h-5" /> */}
                {stat.icon}
              </div>
              <span className="text-xs font-bold text-accent ">
                {stat.label}
              </span>
            </div>
            <div className="text-xl font-bold mt-2 text-secondary">
              {stat.value}
            </div>
            <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${stat.progress}%`, background: stat.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ChartBar;

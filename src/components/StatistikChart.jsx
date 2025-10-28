// components/StatistikChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const StatistikChart = ({data}) => {
  return (
    <div className="w-full h-[350px] mt-5">
      <ResponsiveContainer>
        <BarChart data={data} barCategoryGap={20} margin={{ top: 20, right: 0, left: -20, bottom: 5 }}>
          <XAxis dataKey="name" tick={{ fill: "#FFFFFF", fontSize: 14, fontFamily: "Poppins", fontWeight: 400, dy: 10 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#FFFFFF", fontSize: 14, fontFamily: "Poppins", fontWeight: 400, dx: -10 }} axisLine={false} tickLine={false} />
          <Tooltip cursor={false} />
          <Bar dataKey="anak" stackId="a" fill="#FACC15" name="Anak-anak" radius={[0, 0, 7.5, 7.5]} />
          <Bar dataKey="wanita" stackId="a" fill="#FB7185" name="Wanita" radius={[0, 0, 0, 0]} />
          <Bar dataKey="pria" stackId="a" fill="#38BDF8" name="Pria" radius={[7.5, 7.5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatistikChart;

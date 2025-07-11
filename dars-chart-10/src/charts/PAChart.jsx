// PolarAreaChart.jsx
import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// 🔧 kerakli modullarni ro'yxatdan o'tkazamiz
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

// 📊 Ma'lumotlar
const data = {
  labels: ["Frontend", "Backend", "DevOps", "UI/UX", "CyberSec"],
  datasets: [
    {
      label: "Bo‘limlar bo‘yicha tajriba",
      data: [40, 25, 15, 10, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function PolarAreaChart() {
  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <h3>Bo‘limlar ulushi (PolarArea)</h3>
      <PolarArea data={data} />
    </div>
  );
}

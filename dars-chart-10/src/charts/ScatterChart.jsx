// ScatterChart.jsx
import React from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// 🔧 Modullarni ro'yxatdan o'tkazamiz
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

// 📊 Scatter chart uchun ma’lumotlar
const data = {
  datasets: [
    {
      label: "Yosh vs Ish tajribasi",
      data: [
        { x: 18, y: 1 },
        { x: 20, y: 2 },
        { x: 22, y: 3 },
        { x: 25, y: 5 },
        { x: 28, y: 7 },
        { x: 30, y: 9 },
      ],
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

const options = {
  scales: {
    x: {
      type: "linear",
      position: "bottom",
      title: {
        display: true,
        text: "Yosh",
      },
    },
    y: {
      title: {
        display: true,
        text: "Ish tajribasi (yil)",
      },
    },
  },
  plugins: {
    legend: { display: true },
    tooltip: { enabled: true },
  },
};

export default function ScatterChart() {
  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <h3>Yosh va Ish Tajribasi (Scatter)</h3>
      <Scatter data={data} options={options} />
    </div>
  );
}

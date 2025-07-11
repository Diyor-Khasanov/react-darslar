// BubbleChart.jsx
import React from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// ChartJS modullarini ro'yxatdan o'tkazamiz
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

// Ma’lumotlar
const data = {
  datasets: [
    {
      label: "Tashrif va Savdo",
      data: [
        { x: 5, y: 8, r: 10 },
        { x: 10, y: 12, r: 15 },
        { x: 15, y: 5, r: 8 },
        { x: 20, y: 10, r: 20 },
        { x: 25, y: 4, r: 12 },
      ],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
    },
  ],
};

// Grafik sozlamalari
const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: "Kunlik tashriflar",
      },
    },
    y: {
      title: {
        display: true,
        text: "Sotuvlar",
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          const { x, y, r } = context.raw;
          return `Tashrif: ${x}, Sotuv: ${y}, Hajm: ${r}`;
        },
      },
    },
  },
};

export default function BubbleChart() {
  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <h3>Tashriflar va Sotuvlar (Bubble Chart)</h3>
      <Bubble data={data} options={options} />
    </div>
  );
}

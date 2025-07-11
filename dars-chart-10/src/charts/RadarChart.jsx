// RadarChart.jsx
import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// 🔧 kerakli modullarni ro'yxatdan o'tkazamiz
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// 📊 Ma'lumotlar
const data = {
  labels: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  datasets: [
    {
      label: "Diyor",
      data: [80, 90, 90, 75, 80, 80],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
    },
    {
      label: "Ali",
      data: [90, 80, 75, 55, 75, 60],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 2,
    },
  ],
};

export default function RadarChart() {
  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <h3>Dasturchilar Skill Taqqoslash (Radar)</h3>
      <Radar data={data} />
    </div>
  );
}

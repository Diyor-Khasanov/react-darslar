// DoughnutChart.jsx
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// 📌 kerakli modullarni ro'yxatdan o'tkazamiz
ChartJS.register(ArcElement, Tooltip, Legend);

// 📊 Ma'lumotlar
const data = {
  labels: ["React", "Vue", "Angular", "Svelte"],
  datasets: [
    {
      label: "Frameworks Popularity",
      data: [45, 25, 20, 10],
      backgroundColor: [
        "#61DBFB", // React
        "#41B883", // Vue
        "#DD0031", // Angular
        "#FF3E00", // Svelte
      ],
      borderWidth: 1,
    },
  ],
};

export default function DoughnutChart() {
  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <h3>Dasturlash Frameworklarining ulushi (Doughnut Chart)</h3>
      <Doughnut data={data} />
    </div>
  );
}

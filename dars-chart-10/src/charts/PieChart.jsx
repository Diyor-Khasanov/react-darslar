// PieChart.jsx
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Ma'lumotlar
const data = {
  labels: ["Frontend", "Backend", "UI/UX", "DevOps"],
  datasets: [
    {
      label: "Bilim foizi",
      data: [40, 30, 20, 10],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
      borderWidth: 1,
    },
  ],
};

// Pie Chart komponenti
export default function PieChart() {
  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <h3>Dasturlash bilimim (Pie Chart)</h3>
      <Pie data={data} />
    </div>
  );
}

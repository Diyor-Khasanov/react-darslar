// LineChart.jsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

// 📌 ChartJS ga kerakli modullarni ro'yxatdan o'tkazamiz
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// 📊 Chart konfiguratsiyasi
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Oylik Foyda (Line Chart)",
    },
  },
};

// 📆 X o‘qi (oylar)
const labels = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun"];

// 📈 Ma'lumotlar
const data = {
  labels,
  datasets: [
    {
      label: "Foyda (so‘m)",
      data: [1200, 1900, 3000, 2200, 2500, 2700],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
    },
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}

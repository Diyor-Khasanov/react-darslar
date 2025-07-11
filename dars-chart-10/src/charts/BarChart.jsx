import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Sotuvlar grafigi" },
  },
};

const labels = ["Yanvar", "Fevral", "Mart", "Aprel", "May"];

const data = {
  labels,
  datasets: [
    {
      label: "Mahsulotlar",
      data: [10, 20, 30, 15, 25],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function BarChart(props) {
  return <Bar options={options} data={data} {...props} />;
}

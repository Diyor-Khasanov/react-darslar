import React from "react";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import DChart from "./charts/DChart";
import PAChart from "./charts/PAChart";
import RadarChart from "./charts/RadarChart";
import ScatterChart from "./charts/ScatterChart";
import Bubble from "./charts/Bubble";

function App() {
  return (
    <div className="App">
      <BarChart />
      <LineChart />
      <PieChart />
      <DChart />
      <PAChart />
      <RadarChart />
      <ScatterChart />
      <Bubble />
    </div>
  );
}

export default App;

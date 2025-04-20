import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

const BloodPressureChart = ({ data }) => {
  const months = data.map((entry) => entry.month);
  const systolic = data.map((entry) => entry.blood_pressure.systolic.value);
  const diastolic = data.map((entry) => entry.blood_pressure.diastolic.value);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Systolic",
        data: systolic,
        borderColor: "red",
        fill: false,
      },
      {
        label: "Diastolic",
        data: diastolic,
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return (
    <div style={{ maxWidth: "500px" }}>
      <h3>Blood Pressure Chart</h3>
      <Line data={chartData} />
    </div>
  );
};

export default BloodPressureChart;

import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartData = () => {
  // Отримуємо дані з localStorage
  const total = Number(localStorage.getItem("progress")) || 0;
  const completed = Number(localStorage.getItem("completedTask")) || 0;
  const remaining = Math.max(total - completed, 0);

  // Дані для графіка
  const data = {
    labels: ["Completed Tasks", "Remaining Tasks"],
    datasets: [
      {
        data: [completed, remaining],
        backgroundColor: ["#0088FE", "#FFBB28"],
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem : any) => {
            const value = tooltipItem.raw;
            return `${tooltipItem.label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Task Progress Chart</h2>
      <div style={{ width: "400px", margin: "0 auto" }}>
      </div>
    </div>
  );
};

export default ChartData;
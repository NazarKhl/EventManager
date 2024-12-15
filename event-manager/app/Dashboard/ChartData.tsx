"use client";
import React, { useEffect, useRef } from "react";
import {
  Chart,
  BarController,    
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

Chart.register(
  BarController,    
  BarElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale
);

const ChartData: React.FC = () => {
  const chartCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const total =
      typeof window !== "undefined"
        ? Number(localStorage.getItem("progress")) || 0
        : 0;
    const completed =
      typeof window !== "undefined"
        ? Number(localStorage.getItem("completedTask")) || 0
        : 0;
    const remaining = Math.max(total - completed, 0);

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartCanvasRef.current) {
      const ctx = chartCanvasRef.current.getContext("2d");
      if (ctx) {
        chartInstanceRef.current = new Chart(ctx, {
          type: "bar", 
          data: {
            labels: ["Completed Tasks", "Remaining Tasks"], 
            datasets: [
              {
                data: [completed, remaining], 
                backgroundColor: ["#88bc63", "#2563eb"], 
                borderColor: ["#ffffff", "#ffffff"], 
                borderWidth: 2, 
              },
            ],
          },
          options: {
            responsive: true, 
            plugins: {
              legend: {
                position: "top", 
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => {
                    const value = tooltipItem.raw as number;
                    const label = tooltipItem.label || "";
                    return `${label}: ${value}`; 
                  },
                },
              },
            },
            cutout: "50%", 
          },
        });
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
     <div className="absolute w-3/4 h-3/5 text-white text-center p-8 rounded-lg mt-64 ml-28"> 
        <canvas ref={chartCanvasRef}></canvas>
      </div>
    </div>
  );
};

export default ChartData;

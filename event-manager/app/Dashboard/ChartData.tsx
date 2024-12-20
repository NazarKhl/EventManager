"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  BarController,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { ExclamationCircleOutlined } from "@ant-design/icons"; 

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

  const [completed, setCompleted] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(0);
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(true); 

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

    // Перевірка, чи є дані
    if (completed === 0 && remaining === 0) {
      setIsDataAvailable(false);
    } else {
      setIsDataAvailable(true); 
    }

    setCompleted(completed);
    setRemaining(remaining);

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartCanvasRef.current && isDataAvailable) {
      const ctx = chartCanvasRef.current.getContext("2d");
      if (ctx) {
        const labels = ["Completed", "Remaining"];

        chartInstanceRef.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                data: [completed, remaining],
                backgroundColor: ["#88bc63", "#2563eb"],
                borderColor: ["#ffffff", "#ffffff"],
                borderWidth: 2,
                borderRadius: 20,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function (value: any) {
                    if (value % 1 === 0) {
                      if (value <= 8) {
                        return value;
                      }
                    }
                    return "";
                  },
                },
              },
            },
            plugins: {
              legend: {
                display: false,
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
          },
        });
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [completed, remaining, isDataAvailable]);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute w-3/5 h-3/5 text-white text-center p-8 rounded-lg mt-72 mr-32">
        {isDataAvailable ? (
          <canvas className="" ref={chartCanvasRef}></canvas>
        ) : (
          <div className="text-2xl text-gray-500 items-center space-x-2 absolute ml-56 mt-36 ">
            <ExclamationCircleOutlined style={{ fontSize: "40px", color: "#ff4d4f" }} /><br/>
            <span>I can't find any task</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChartData;

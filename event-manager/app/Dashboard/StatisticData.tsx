"use client";

import { useEffect, useState } from "react";

export default function StatisticData() {
  const [totalTasks, setTotalTasks] = useState<number>(0);
  const [tasksCompleted, setTasksCompleted] = useState<number>(0);

  const loadData = () => {
    const total = localStorage.getItem("progress");
    const completed = localStorage.getItem("completedTask");

    setTotalTasks(total ? parseInt(total, 10) : 0);
    setTasksCompleted(completed ? parseInt(completed, 10) : 0);
  };

  useEffect(() => {
    loadData();

    const handleStorageChange = () => {
      loadData();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <div className="fixed bg-blue-600 left-72 top-36 text-white w-1/5  border rounded-lg shadow-xl h-1/5 ">
        <p className="flex justify-center mt-7 text-xl font-bold">
          Total Tasks
        </p>
        <p className="flex justify-center mt-2 font-bold text-2xl">
          {totalTasks}
        </p>
      </div>

      <div className="fixed bg-blue-600 right-1/3 top-36  text-white w-1/5 border rounded-lg shadow-xl h-1/5 sm:h-1/6 md:h-1/5 lg:h-1/6 xl:h-1/5">
        <p className="flex justify-center mt-7 text-xl font-bold">
          Completed Tasks
        </p>
        <p className="flex justify-center mt-2 font-bold text-2xl">
          {tasksCompleted}
        </p>
      </div>
    </>
  );
}

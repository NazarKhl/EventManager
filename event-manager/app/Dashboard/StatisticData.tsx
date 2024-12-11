"use client";

import { useEffect, useState } from "react";

export default function StatisticData() {
  const [totalTasks, setTotalTasks] = useState<number>(0); 
  const [tasksCompleted, setTasksCompleted] = useState<number>(0); 

  useEffect(() => {
    const total = localStorage.getItem("progress");
    const completed = localStorage.getItem("completedTasks");

    setTotalTasks(total ? parseInt(total, 10) : 0);
    setTasksCompleted(completed ? parseInt(completed, 10) : 0);
  }, []);

  return (
    <>
      <div className="absolute bg-blue-600 left-[280px] top-36 text-white w-1/5 border rounded-lg shadow-xl h-1/5">
        <p className="flex justify-center mt-7 text-xl font-bold">Total Tasks</p>
        <p className="flex justify-center mt-2 font-bold text-2xl">{totalTasks}</p>
      </div>
      <div className="absolute bg-blue-600 right-[720px] top-36 w-1/5 border rounded-lg text-white shadow-xl h-1/5">
        <p className="flex justify-center mt-7 text-xl font-bold">Tasks Completed</p>
        <p className="flex justify-center mt-2 font-bold text-2xl">{tasksCompleted}</p>
      </div>
    </>
  );
}

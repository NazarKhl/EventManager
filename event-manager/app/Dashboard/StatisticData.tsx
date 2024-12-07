"use client";

import { useEffect, useState } from "react";

export default function StatisticData() {
  const [totalTasks, setTotalTasks] = useState<number>(0); // Стан для загальних задач
  const [tasksCompleted, setTasksCompleted] = useState<number>(0); // Стан для виконаних задач

  useEffect(() => {
    // Отримуємо дані з localStorage
    const total = localStorage.getItem("progress");
    const completed = localStorage.getItem("completedTasks");

    // Перевіряємо і перетворюємо значення
    setTotalTasks(total ? parseInt(total, 10) : 0);
    setTasksCompleted(completed ? parseInt(completed, 10) : 0);
  }, []);

  return (
    <>
      <div className="absolute left-80 top-36 w-1/5 border shadow-xl h-1/5">
        <p className="flex justify-center mt-7 text-xl font-bold">Total Tasks</p>
        <p className="flex justify-center mt-2">{totalTasks}</p>
      </div>
      <div className="absolute right-80 top-36 w-1/5 border shadow-xl h-1/5">
        <p className="flex justify-center mt-7 text-xl font-bold">Tasks Completed</p>
        <p className="flex justify-center mt-2">{tasksCompleted}</p>
      </div>
    </>
  );
}

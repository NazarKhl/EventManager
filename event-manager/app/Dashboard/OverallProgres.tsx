"use client";

import { Progress, Button } from "antd";
import React, { useState } from "react";

export default function OverallProgres() {
  const [progress, setProgress] = useState<number>(Number(localStorage.getItem("progress") || ""));
  const maxProgress = 0;

  const handleAddTask = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Math.min(progress + 10, maxProgress);
    setProgress(newProgress);
    localStorage.setItem("progress", String(newProgress)); 
  }

  return (
    <>
      <div className="absolute right-0 top-28 w-1/4 border shadow-xl h-96">
        <p className="font-bold flex justify-center mt-8 text-xl">
          Overall Progress
        </p>
        <div className="flex  justify-center mt-20">
          <Progress type="circle" percent={progress} size="large" />
        </div>
      </div>
      <div className="absolute right-0 top-2/4 mt-10 w-1/4 border shadow-xl h-96 overflow-auto md:overflow-scrol">
        <p className="absolute text-xl font-bold mt-6 ml-7">Latest Projects</p>
        <Button className="absolute right-0 mt-6 mr-7" type="primary" onClick={handleAddTask}><span className="text-2xl">+</span>Add New</Button>
      </div>
    </>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Input, Button, Progress, List, DatePicker, message } from "antd";
import dayjs from "dayjs";

type Task = {
  id: number;
  name: string;
  date?: string;
  isCompleted: boolean;
};

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState<string>("");
  const [newTaskDate, setNewTaskDate] = useState<string | undefined>();
  const [messageApi, contextHolder] = message.useMessage();

  const [totalTask, setTotalTask] = useState<number>(
    Number(localStorage.getItem("progress")) || 0
  );

  const [completedTask, setCompletedTask] = useState<number>(
    Number(localStorage.getItem("completedTask")) || 0
  );

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("progress", totalTask.toString());
  }, [totalTask]);

  useEffect(() => {
    localStorage.setItem("completedTask", completedTask.toString());
  }, [completedTask]);

  const handleAddTask = () => {
    if (!newTaskName.trim()) {
      messageApi.warning("Task name cannot be empty!");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      name: newTaskName.trim(),
      date: newTaskDate,
      isCompleted: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTotalTask((prev) => prev + 1);
    setNewTaskName("");
    setNewTaskDate(undefined);
    window.location.reload();
  };

  const handleCompleteTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      )
    );
    messageApi.success("Task completed!");
    setCompletedTask((prev) => prev + 1);
    window.location.reload();
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    messageApi.success("Task deleted!");
    setTotalTask((prev) => prev - 1);
    const deletedTask = tasks.find((task) => task.id === id);
    if (deletedTask && deletedTask.isCompleted) {
      setCompletedTask((prev) => prev - 1);
    }
    window.location.reload();
  };

  const handleUncompleteTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: false } : task
      )
    );
    setCompletedTask((prev) => prev - 1);
    window.location.reload();
    messageApi.success("Task marked as incomplete!");
  };

  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const progress =
    tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

  return (
    <>
      {contextHolder}
      <div className="relative right-0 z-10 w-1/2 border shadow-xl h-full overflow-auto">
        <p className="font-bold flex justify-center mt-9 text-2xl">
          Event Manager
        </p>
        <div className="flex justify-center mt-12 space-x-2">
          <Input
            placeholder="Task Name"
            value={newTaskName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewTaskName(e.target.value)
            }
            className="w-2/3"
          />
          <DatePicker
            onChange={(date, dateString) =>
              setNewTaskDate(dateString.toString())
            }
            className="w-1/4"
          />
        </div>
        <div className="flex justify-center mt-5">
          <Button type="primary" onClick={handleAddTask}>
            Add Task
          </Button>
        </div>

        <div className="mt-5 px-5">
          <Progress type="line" percent={progress} />
        </div>

        <div className="mt-5 px-5">
          <List
            dataSource={tasks}
            renderItem={(task) => (
              <List.Item
                actions={[
                  !task.isCompleted && (
                    <Button
                      type="primary"
                      size="small"
                      onClick={() => handleCompleteTask(task.id)}
                    >
                      Complete
                    </Button>
                  ),
                  task.isCompleted && (
                    <Button
                      type="primary"
                      size="small"
                      onClick={() => handleUncompleteTask(task.id)}
                    >
                      Uncomplete
                    </Button>
                  ),
                ]}
              >
                <List.Item.Meta
                  title={
                    <span
                      style={{
                        textDecoration: task.isCompleted
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {task.name}
                    </span>
                  }
                  description={
                    task.date
                      ? `Due: ${dayjs(task.date).format("MMM DD, YYYY")}`
                      : "No deadline"
                  }
                />
                <Button
                  type="primary"
                  size="small"
                  danger
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </Button>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
}

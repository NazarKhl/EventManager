"use client";

import React, { useState, useEffect } from "react";
import { Input, Button, Progress, List, DatePicker, message } from "antd";

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
  // const []

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
    setNewTaskName("");
    setNewTaskDate(undefined);
  };

  const handleCompleteTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      )
    );
    messageApi.success("Task completed!");
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    messageApi.success("Task deleted");
  };

  const handleUncompleteTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: false } : task
      )
    );
    messageApi.success("Task Uncompleted!");
  };

  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const progress =
    tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 100;

  return (
    <>
      {contextHolder}
      <div className="absolute right-0 z-10 w-1/3 border shadow-xl h-full overflow-auto">
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
            onChange={(date, dateString) => setNewTaskDate(dateString)}
            className=" w-1/4 "
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
                    <>
                      <Button
                        type="primary"
                        size="small"
                        className="-ml-10"
                        onClick={() => handleCompleteTask(task.id)}
                      >
                        Complete
                      </Button>
                    </>
                  ),
                  task.isCompleted && (
                    <>
                      <Button
                        className="-ml-14"
                        type="primary"
                        size="small"
                        onClick={() => handleUncompleteTask(task.id)}
                      >
                        Uncomplete
                      </Button>
                    </>
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
                  description={task.date ? `Due: ${task.date}` : "No deadline"}
                />
                <Button
                  className="ml-1"
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

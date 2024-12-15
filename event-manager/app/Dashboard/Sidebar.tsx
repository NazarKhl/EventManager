"use client";

import React, { useEffect, useState } from "react";
import { Modal, Input, Button, message } from "antd";
import ChartData from "./ChartData";

export default function Sidebar() {
  const [changeTheme, setChangeTheme] = useState<string>("light");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isProgressOpen, setIsProgressOpen] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>(
    localStorage.getItem("userName") || ""
  );
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "warning",
      content: "Data was saved",
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const showProgress = () => {
    setIsProgressOpen(true);
  };

  const handleOk = () => {
    success();
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  const handleOk2 = () => {
    setIsProgressOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (changeTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [changeTheme]);

  const handleChnageTheme = () => {
    setChangeTheme(changeTheme === "light" ? "dark" : "light");
  };

  const handleNameChenger = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setUserName(newName);
    localStorage.setItem("userName", newName);
  };

  return (
    <>
      {contextHolder}
      <div className="border w-96 shadow-xl z-10">
        <p className="text-2xl flex justify-center mt-10">
          <span className="font-extrabold text-blue-700">Event</span> Hub
        </p>
        <div className="flex items-center justify-center flex-col space-y-16 font-bold">
          <p className="border bg-blue-600 rounded-lg text-white w-40 text-center mt-32 text-lg hover:border-blue-500 ease-linear duration-200 cursor-pointer">
            Dashboard
          </p>
          <p
            className="border rounded-lg w-40 text-center mt-10 text-lg hover:border-blue-500 ease-linear duration-200 cursor-pointer"
            onClick={showProgress}
          >
            Progress
          </p>
          <p className="border rounded-lg w-40 text-center mt-10 text-lg hover:border-blue-500 ease-linear duration-200 cursor-pointer">
            Events
          </p>
          <p
            onClick={showModal}
            className="border rounded-lg w-40 text-center mt-10 text-lg hover:border-blue-500 ease-linear duration-200 cursor-pointer"
          >
            Settings
          </p>
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p className="text-lg mb-4">
              <span className="font-medium">Hi, </span>
              {userName}
            </p>
            <Input onChange={handleNameChenger} placeholder="Change Name" />
          </Modal>
          <Modal
            open={isProgressOpen}
            onOk={handleOk2}
            onCancel={handleOk2}
          >
            <div className="max-w-full overflow-x-auto">
              <ChartData />
            </div>
          </Modal>
        </div>
        <div
          className="flex justify-center items-center mt-32 hover:cursor-pointer hover:text-lg ease-linear duration-200 font-bold"
          onClick={handleChnageTheme}
        >
          {changeTheme === "light" ? "Dark Theme" : "Light Theme"}
        </div>
      </div>
    </>
  );
}

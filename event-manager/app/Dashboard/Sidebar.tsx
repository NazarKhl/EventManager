"use client";

import React, { useEffect, useState } from "react";
import { Modal, Input, Button, message, Space } from "antd";
import { setTimeout } from "timers";

export default function Sidebar() {
  const [changeTheme, setChangeTheme] = useState<string>("light");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    success();
    setTimeout(() => {
      setIsModalOpen(false);
      window.location.reload();
    }, 500);
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
      <div className="border w-96 shadow-xl">
        <p className="text-2xl flex justify-center mt-10 ">
          <span className="font-extrabold text-blue-700">Event</span> Hub
        </p>
        <div className="flex items-center justify-center flex-col space-y-16 font-bold">
          <p className="border bg-blue-600 rounded-lg text-white w-40 text-center mt-32 text-lg hover:border-blue-500 ease-linear duration-200 cursor-pointer">
            Dashboard
          </p>
          <p className="border rounded-lg w-40 text-center mt-10 text-lg hover:border-blue-500 ease-linear duration-200 cursor-pointer">
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
          <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p className="text-lg mb-4">
              <span className="font-medium">Hi, </span>
              {userName}
            </p>
            <Input onChange={handleNameChenger} placeholder="Change Name" />
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

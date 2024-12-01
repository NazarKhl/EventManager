"use client";

import { useEffect, useState } from "react";
import { Modal } from "antd";


export default function Sidebar() {
  const [changeTheme, setChangeTheme] = useState('light');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (changeTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
  }, [changeTheme]);

  const handleChnageTheme = () => {
    setChangeTheme(changeTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="border w-56 shadow-xl">
      <p className="text-2xl flex justify-center mt-10">
        <span className="font-extrabold text-blue-700">Event</span> Hub
      </p>
      <div className="flex items-center justify-center flex-col space-y-16">
        <p className="border rounded-lg w-40 text-center mt-32 text-lg hover:border-blue-500 ease-linear duration-200 cursor-pointer">
          Dashboard
        </p>
        <p className="border rounded-lg w-40 text-center mt-10 text-lg hover:border-blue-500 ease-linear duration-200 cursor-pointer">
          Progress
        </p>
        <p className="border rounded-lg w-40 text-center mt-10 text-lg hover:border-blue-500 ease-linear duration-200 cursor-pointer">
          Events
        </p>
        <p  onClick={showModal} className="border rounded-lg w-40 text-center mt-10 text-lg hover:border-blue-500 ease-linear duration-200 cursor-pointer">
          Settings
        </p>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      </div>
      <div
        className="flex justify-center items-center mt-32 hover:cursor-pointer hover:text-lg ease-linear duration-200 "
        onClick={handleChnageTheme}
      >
        {changeTheme === "light" ? "Dark Theme" : "Light Theme"}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Modal, Input, message } from "antd";
import { QqOutlined } from "@ant-design/icons";
import Projects from "./Projects";

export default function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>(
    localStorage.getItem("userName") || ""
  );
  const [messageApi, contextHolder] = message.useMessage();
  const [nameValue, setNameValue] = useState<string>("");
  const [showProjectPanel, setShowProjectPanel] = useState<boolean>(false);

  const success = () => {
    messageApi.open({
      type: "warning",
      content: "Data was saved",
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    localStorage.setItem("userName", nameValue);
    setUserName(nameValue);
    success();
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
    window.location.reload();
  };

  const handleCancel = () => {
    setNameValue("");
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  const handleNameChenger = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setNameValue(newName);
    setUserName(newName);
  };

  const showProjects = () => {
    setShowProjectPanel((prev) => !prev);
  };

  return (
    <>
      {contextHolder}
      <div className="border w-96 shadow-xl z-10">
        <p className="text-2xl flex justify-center mt-6">
          <span className="font-extrabold text-blue-700">Event</span>{" "}
          <span className="font-bold">Hub</span>
        </p>
        <div className="flex items-center justify-center flex-col space-y-16 font-bold">
          <p className="border bg-blue-600 rounded-lg text-white w-40 text-center mt-52 text-lg hover:border-blue-500 ease-linear duration-200 cursor-pointer">
            Dashboard
          </p>
          <p
            className="border rounded-lg w-40 text-center mt-10 text-lg hover:border-blue-500 ease-linear duration-200 cursor-pointer"
            onClick={showProjects}
          >
            Projects
          </p>
          {showProjectPanel ? <Projects /> : ""}
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
            <Input
              value={nameValue}
              onChange={handleNameChenger}
              placeholder="Change Name"
            />
          </Modal>
        </div>
        <QqOutlined className="flex text-blue-700 justify-center mt-56 text-5xl hover:cursor-pointer hover:text-blue-800 duration-500" />
      </div>
    </>
  );
}

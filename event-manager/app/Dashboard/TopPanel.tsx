"use client";
import { useEffect, useState } from "react";

import { MoonOutlined, SunOutlined } from "@ant-design/icons";

export default function TopPanel() {
  const [userName, setUserName] = useState<string>("");
  const [changeTheme, setChangeTheme] = useState<string>(localStorage.getItem("theme") || "");

  useEffect(() => {
    const getStoredName = localStorage.getItem("userName");
    setUserName(getStoredName || " ");
  }, []);

  useEffect(() => {
    if (changeTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [changeTheme]);

  const handleChangeTheme = () => {
    const newTheme = changeTheme === "light" ? "dark" : "light";
    setChangeTheme(newTheme);
    localStorage.setItem("theme", newTheme); 
  };
  

  return (
    <div className="border shadow-md z-10 flex w-full h-24 items-center">
      <div className="text-2xl ml-10">
        {userName === " " ? (
          "Uhh... I don`t know who are you🤔"
        ) : (
          <p className="ml-100 mt-100">
            {" "}
            <span className="font-bold">Hi</span>,{userName}
            <p className="text-xs">Welcome Back!</p>
          </p>
        )}
      </div>
      <div className="absolute right-1/3 border w-14 rounded-xl hover:shadow-xl duration-500">
        <div
          className=" justify-center  text-2xl items-center hover:cursor-pointer hover:text-2.4xl duration-500"
          onClick={handleChangeTheme}
        >
          {changeTheme === "light" ? <MoonOutlined className="pl-7" /> : <SunOutlined className="ml-1" />}
        </div>
      </div>
    </div>
  );
}

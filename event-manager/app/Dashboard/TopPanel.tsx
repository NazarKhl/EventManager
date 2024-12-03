"use client";
import { useEffect, useState } from "react";

export default function TopPanel() {
  const [userName, setUserName] = useState<string>("");
  console.log(userName);

  useEffect(() => {
    const getStoredName = localStorage.getItem("userName");
    setUserName(getStoredName || " ");
  }, []);

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
    </div>
  );
}

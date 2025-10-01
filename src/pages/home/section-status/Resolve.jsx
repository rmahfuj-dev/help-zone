import React from "react";
import left from "../../../assets/images/vector1.png";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const Progress = () => {
  const{resolvedTickets}=useContext(UserContext)
  return (
    <div className="relative p-[40px] w-full text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#54CF68] to-[#00827A]"></div>

      <div
        className="absolute right-0 w-full h-full bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${left})`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      ></div>

      <div
        className="absolute right-0 w-full h-full bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${left})`,
          top: "50%",
          transform: "translateY(-50%) scaleX(-1)",
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <p className="text-[1.5rem]">Resolved</p>
        <p className="text-[60px] font-semibold">{resolvedTickets.length}</p>
      </div>
    </div>
  );
};

export default Progress;

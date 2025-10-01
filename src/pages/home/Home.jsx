import React from "react";
import Status from "./section-status/Status";
import Tickets from "./Tickets/Tickets";
import TaskLayout from "./TaskLayout";
const Home = () => {
  return (
    <div className="bg-gray-100 pb-[80px]">
      <Status />
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 xl:grid-cols-3 gap-[32px]">
        <Tickets className="col-span-1 xl:col-span-2" />
        <TaskLayout className="col-span-1" />
      </div>
    </div>
  );
};

export default Home;

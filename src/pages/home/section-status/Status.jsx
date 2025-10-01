import React from "react";
import Progress from "./Progress";
import Resolve from "./Resolve";

const Status = () => {
  return (
    <section className="status">
      <div className="status-container max-w-[1440px] mx-auto py-[80px]">
        <div className="status-wrapper flex gap-6 flex-col items-center md:flex-row">
          <Progress />
          <Resolve />
        </div>
      </div>
    </section>
  );
};

export default Status;

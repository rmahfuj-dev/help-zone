import React from "react";
import PendingList from "./pending/PendingList";
import FinishedList from "./finished/FinishedList";

function TaskLayout({ className }) {
  return (
    <div className={`${className}`}>
      <PendingList />
      <FinishedList />
    </div>
  );
}

export default TaskLayout;

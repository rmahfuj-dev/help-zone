import React, { useContext } from "react";
import Pending from "./Pending";
import { UserContext } from "../../../context/UserContext";

const PendingList = () => {
  const { pendingTickets } = useContext(UserContext);

  return (
    <div className="flex flex-col gap-8 mb-8">
      <h2 className="font-semibold text-[24px] mb-4">Task Status</h2>
      {pendingTickets.length === 0 ? (
        <p className="text-gray-400">Select a ticket to add to Task Status</p>
      ) : (
        pendingTickets.map((ticket) => <Pending key={ticket.id} {...ticket} />)
      )}
    </div>
  );
};

export default PendingList;

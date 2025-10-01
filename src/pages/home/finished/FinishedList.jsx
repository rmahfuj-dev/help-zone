import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import Finished from "./Finished";

const FinishedList = () => {
  const { resolvedTickets } = useContext(UserContext);

  return (
    <div className="px-4">
      <h2 className="font-semibold text-[24px] mb-4">Resolved Task</h2>

      <div className="flex flex-col gap-4">
        {resolvedTickets.length === 0 ? (
          <p className="text-gray-400">No tickets completed yet</p>
        ) : (
          resolvedTickets.map((ticket) => (
            <Finished key={ticket.id} title={ticket.title} />
          ))
        )}
      </div>
    </div>
  );
};

export default FinishedList;

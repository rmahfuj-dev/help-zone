import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../context/UserContext";
import { toast } from "react-toastify";
const Ticket = ({
  id,
  title,
  description,
  status,
  priority,
  assigned_to,
  date,
}) => {
  const { addPendingTickets } = useContext(UserContext);
  const notify = () => {
    toast("In Progress!");
  };

  return (
    <div
      className="flex flex-col bg-white shadow-sm p-4 rounded w-full cursor-pointer"
      onClick={() => {
        addPendingTickets({
          id,
          title,
          description,
          priority,
          assigned_to,
          date,
        });
        notify();
      }}
    >
      <div className="ticekt-header flex justify-between items-center mb-2">
        <h2 className="text-black text-[18px] font-medium truncate">{title}</h2>
        <p
          className={`px-3 py-1 rounded-2xl ${
            status === "Open"
              ? "bg-blue-200 text-blue-800"
              : status === "Pending"
              ? "bg-yellow-200 text-yellow-800"
              : "bg-green-200 text-green-800"
          }`}
        >
          <span className="w-[10px] h-[10px] rounded-full inline-block mr-2 bg-current"></span>
          {status}
        </p>
      </div>
      <p className="description text-gray-400 mb-4 truncate flex-wrap">
        {description}
      </p>
      <div className="details flex justify-between items-center">
        <div className="ticket-details flex gap-4">
          <p className="id text-[14px] text-gray-400">{id}</p>
          <p
            className={`priority font-medium text-[14px] ${
              priority === "High Priority"
                ? "text-red-500"
                : priority === "Medium Priority"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {priority}
          </p>
        </div>
        <div className="user-details flex gap-4 items-center">
          <p className="user text-[14px] text-gray-400">{assigned_to}</p>
          <p className="date text-[14px] text-gray-400">
            <span className="mr-2">
              <FontAwesomeIcon icon={faCalendarDays} />
            </span>
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;

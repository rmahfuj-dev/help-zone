import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { toast } from "react-toastify";

const Pending = ({ id, title }) => {
  const { completed } = useContext(UserContext);
  const notify = () => {
    toast("Completed");
  };

  return (
    <div className="bg-white shadow-lg p-4 rounded-[4px] flex flex-col justify-center gap-4">
      <p className="text-[18px] font-medium">{title}</p>
      <button
        className="text-white font-semibold bg-green-600 w-full py-3 px-4"
        onClick={() => {
          completed({ id, title });
          notify();
        }}
      >
        Complete
      </button>
    </div>
  );
};

export default Pending;

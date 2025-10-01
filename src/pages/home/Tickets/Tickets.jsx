import React, { useEffect, useState ,useContext} from "react";
import Ticket from "./Ticket";
import { UserContext } from "../../../context/UserContext";
const Tickets = ({className}) => {
  const {tickets,loading,error}=useContext(UserContext);
 if(loading){
  return <h1>Data Loading</h1>
 }
 if(error){
  return <h1>Can't fetch the data from api</h1>
 }
  return (
    <div className={`grid grid-cols-1  xl:grid-cols-2 gap-x-6 gap-y-4 place-items-center ${className}`}>
      {tickets.map((ticket) => {
        return <Ticket key={ticket.id} {...ticket} />;
      })}
    </div>
  );
};

export default Tickets;

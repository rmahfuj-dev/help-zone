import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [pendingTickets, setPendingTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addPendingTickets = (ticket) => {
    const updatedTicket = { ...ticket, status: "Pending" };
    setPendingTickets((prev) => {
      if (prev.find((t) => t.id === ticket.id)) return prev;
      return [...prev, updatedTicket];
    });
    setTickets((prev) =>
      prev.map((t) => (t.id === ticket.id ? { ...t, status: "Pending" } : t))
    );
  };

  const completed = (ticket) => {
    setPendingTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolvedTickets((prev) => [...prev, { ...ticket, status: "Completed" }]);
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./ticket-data/ticket.json");
        if (!res.ok) throw new Error("Can't fetch the data from api");
        const data = await res.json();
        const ticketsWithStatus = data.map((t) => ({ ...t, status: "Open" }));
        setTickets(ticketsWithStatus);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        tickets,
        pendingTickets,
        resolvedTickets,
        loading,
        error,
        addPendingTickets,
        completed,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

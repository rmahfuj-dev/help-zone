import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import { UserProvider } from "./context/UserContext";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <UserProvider>
      <Header />
      <Home />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </UserProvider>
  );
};

export default App;

import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "./TopBar";
import Header from "./Header";
import RegistesMovimientSection from "./RegistesMovimientSection";

const RegistesMovimentContec = () => {
  return (
    <div className="main-content">
      <TopBar />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="content-area">
          <Header />
          <RegistesMovimientSection />
        </div>
      </div>
    </div>
  );
};

export default RegistesMovimentContec;

import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "./TopBar";
import Header from "./Header";
import RetornoSection from "./RetornoSection";

const RetornoContec = () => {
  return (
    <div className="main-content">
      <TopBar />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="content-area">
          <Header />
          <RetornoSection />
        </div>
      </div>
    </div>
  );
};

export default RetornoContec;

import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "./TopBar";
import Header from "./Header";
import MovementsSection from "./MovementsSection";

const MainContent = () => {
  return (
    <div className="main-content">
      <TopBar />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="content-area">
          <Header />
          <MovementsSection />
        </div>
      </div>
    </div>
  );
};

export default MainContent;

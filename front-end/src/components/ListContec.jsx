import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "./TopBar";
import Header from "./Header";
import ListSection from "./ListSection";

const ListContec = () => {
  return (
    <div className="main-content">
      <TopBar />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="content-area">
          <Header />
          <ListSection />
        </div>
      </div>
    </div>
  );
};

export default ListContec;

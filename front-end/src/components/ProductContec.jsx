import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "./TopBar";
import Header from "./Header";
import ProductsSection from "./ProductsSection";

const ProductContec = () => {
  return (
    <div className="main-content">
      <TopBar />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="content-area">
          <Header />
          <ProductsSection />
        </div>
      </div>
    </div>
  );
};

export default ProductContec;

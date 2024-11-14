import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../css/Main.css";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`main-container ${isSidebarOpen ? "blur-background" : ""}`}>
      <button
        className="explore-button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        Explore web APIs
      </button>
      {isSidebarOpen && <Sidebar />}
    </div>
  );
};

export default Main;

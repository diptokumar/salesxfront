import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SalesXAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <button>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

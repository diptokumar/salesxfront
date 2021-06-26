import React, {useContext} from "react";
import "./topbar.css";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user, dispatch } = useContext(AuthContext);

  const logoutHandler = ()=>{
    dispatch({ type: "LOG_OUT" });
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SalesXAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <button onClick={logoutHandler}>{user && "LOGOUT"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

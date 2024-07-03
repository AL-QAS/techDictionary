import React from "react";
import { AdminNav, Sidebar } from "../../adminComponent";
import "../DashLayout/Layout.css";
const Layout = ({ active, children }) => {
  return (
    <div className="layout">
      <Sidebar active={active} />
      <div className="dash-con">{children}</div>
    </div>
  );
};
export default Layout;

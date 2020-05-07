import React, { useState } from "react";
import { Link } from "gatsby";

import Logo from "../common/Logo";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, type }) => {
  return (
    <div className={`root antialiased font-nunito ${type}`}>
      <div style={{ paddingTop: `calc(70px)` }}>
        <>{children}</>
      </div>
      {type !== "docs" && <Footer />}
    </div>
  );
};

export default Layout;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { subProvider } from "./context-15";
import subNavbar from "./nav-15";
import subRoutes from "./routes-15";

const Tugas15 = () => {
  return (
    <Router>
      <subProvider>
        <subNavbar />
        <subRoutes />
      </subProvider>
    </Router>
  );
};

export default Tugas15;
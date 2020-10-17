import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { subContext } from "./context-15";
import subSwitch from "./switch-15";

const subNavbar = () => {
  const [darkTheme] = useContext(subContext);

  return (
    <div className={`navbar ${darkTheme ? "dark" : "light"}`}>
      <nav className="navbar-left">
        <ul>
          <li>
            <Link to="tugas9">Tugas 9</Link>
          </li>
          <li>
            <Link to="tugas10">Tugas 10</Link>
          </li>
          <li>
            <Link to="tugas11">Tugas 11</Link>
          </li>
          <li>
            <Link to="tugas12">Tugas 12</Link>
          </li>
          <li>
            <Link to="tugas13">Tugas 13</Link>
          </li>
          <li>
            <Link to="tugas14">Tugas 14</Link>
          </li>
        </ul>
      </nav>
      <nav className="navbar-right">
        <subSwitch />
      </nav>
    </div>
  );
};

export default Tugas15Navbar;
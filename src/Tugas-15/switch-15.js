import React, { useContext } from "react";
import { subContext } from "./context-15";

const subSwitch = () => {
    
const [darkTheme, setDarkTheme] = useContext(subContext);

const handleCheck = (e) => {
    const checked = e.target.checked;

    setDarkTheme(checked);
  };

  return (
    <>
      <label className="switch" style={{ margin: "auto" }}>
        <input type="checkbox" checked={darkTheme} onChange={handleCheck} />
        <span className="slider round"></span>
      </label>
      <h3 style={{ marginLeft: "8px" }}>Dark</h3>
    </>
  );
};

export default subSwitch;
import React, { useState, createContext } from "react";

export const subContext = createContext();

export const subProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <subContext.Provider value={[darkTheme, setDarkTheme]}>
      {props.children}
    </subContext.Provider>
  );
};
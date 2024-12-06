"use client";

import { createContext, useEffect, useState } from "react";

export const context = createContext();

const TestContext = ({ children }) => {
  const [state, setState] = useState();

  console.log(children);

  // useEffect(() => {
  //   setState(localStorage.getItem("cart"));
  // }, []);
  // const value = { state, setState };

  console.log("component mount");
  const value = {};

  useEffect(() => {
    return () => {
      console.log("Component unmount");
    };
  }, []);
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default TestContext;

"use client";
import React, { useState } from "react";

const Header = ({ children }) => {
  const [loading, setLoading] = useState();
  return <div>{children}</div>;
};

export default Header;

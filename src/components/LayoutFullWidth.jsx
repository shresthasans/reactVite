import React from "react";
import Nav from "./Nav";

const LayoutFullWidth = (props) => {
  const { children } = props;
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default LayoutFullWidth;

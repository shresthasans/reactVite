import React from "react";
import Nav from "./Nav";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Nav />
      <div className="flex justify-center pt-8">
        <section className="w-4/6 m-auto">{children}</section>
      </div>
    </>
  );
};

export default Layout;

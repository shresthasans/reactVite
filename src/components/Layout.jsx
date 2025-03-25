import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="h-dvh flex flex-col">
      <Nav />
      <main className="flex justify-center py-8 flex-auto overflow-x-hidden overflow-y-auto">
        <div className="flex overflow-y-auto w-full">
          <section className="max-w-screen-xl px-4 mx-auto">{children}</section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

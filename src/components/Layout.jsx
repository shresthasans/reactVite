import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <div class="h-dvh flex flex-col">
      <Nav />
      <main className="flex justify-center py-8 flex-auto overflow-x-hidden overflow-y-auto">
        <div className="flex overflow-y-auto w-full">
        <section className="w-4/6 mx-auto">{children}</section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

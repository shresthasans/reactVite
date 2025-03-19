import React from "react";
import Button from "../../components/Button";
import Nav from "../../components/Nav";
import Layout from "../../components/Layout";

const Home = () => {
  const sayHi = () => {
    alert("Hello");
  };

  return (
    // <div>
    //   <>
    //   <Nav />
    //     <h1>This is Homepage</h1>
    //     <Button title="This is a test button." clickFunc={sayHi} />

    //   </>
    // </div>
    <Layout>
      <h1>This is heading 1</h1>
      <h1>This is heading 2</h1>
    </Layout>
  );
};

export default Home;

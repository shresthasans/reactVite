import React from "react";
import Layout from "../../components/Layout";
import Card from "../blog/components/card/Card";

const Home = () => {
  return (
    <Layout>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};

export default Home;

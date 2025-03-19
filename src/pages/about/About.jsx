import React, { useState } from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout";

const About = () => {
  const [number, setNumber] = useState(10);

  const numIncrease = () => {
    setNumber(number + 1);
  };

  const numDecrease = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };

  return (
    <Layout>
      <h1>{number}</h1>
      <Button
        customClass={"bg-black text-white"}
        clickFunc={numIncrease}
        name="Increment ++"
      />
      <Button clickFunc={numDecrease} name="Decrement --" />
    </Layout>
  );
};

export default About;

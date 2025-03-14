import React, { useState } from "react";
import Button from "../../components/Button";

const Home = () => {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };

  return (
    <>
      <h1>{number}</h1>

      <Button clickEvent={handleIncrement} name="Increment +" />
      <Button clickEvent={handleDecrement} name="Decrement -" />
    </>
  );
};

export default Home;

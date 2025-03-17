import React, { useState } from 'react'
import Button from '../../components/Button';

const About = () => {
  const [number, setNumber] = useState(10);

  const numIncrease = ()=>{
    setNumber(number + 1)
  }

  const numDecrease = ()=>{
    if(number === 0) return
    setNumber(number - 1)
  }

  return (
    <>
      <h1>{number}</h1>
      <Button clickFunc={numIncrease} name="Increment ++" />
      <Button clickFunc={numDecrease} name="Decrement --" />
    </>
  )
}

export default About

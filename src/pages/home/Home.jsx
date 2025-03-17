import React from 'react'
import Button from '../../components/Button'
import Nav from '../../components/Nav'

const Home = () => {

  const sayHi = ()=>{
    alert("Hello")
  }

  return (
    <div>
      <>
        <h1>This is Homepage</h1>
        <Button title="This is a test button." clickFunc={sayHi} />
        <Nav />
      </>
    </div>
  )
}

export default Home

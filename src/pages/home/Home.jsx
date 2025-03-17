import React from 'react'
import Button from '../../components/Button'

const Home = () => {

  const sayHi = ()=>{
    alert("Hello")
  }

  return (
    <div>
      <>
        <h1>This is Homepage</h1>
        <Button title="This is a test button." clickFunc={sayHi} />
      </>
    </div>
  )
}

export default Home

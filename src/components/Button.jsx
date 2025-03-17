import React from 'react'

const Button = (props) => {
  const {type="button", name="Default", clickFunc, title} = props
  return (
    <>
      <button type={type} onClick={clickFunc} title={title}>{name}</button>
    </>
  )
}

export default Button

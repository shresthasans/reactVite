import React from 'react'

const Button = (props) => {
  const {type="button", name="Default", clickFunc, title, customClass="bg-red-600 text-white px-3 py-2"} = props
  return (
    <>
      <button className={customClass} type={type} onClick={clickFunc} title={title}>{name}</button>
    </>
  )
}

export default Button

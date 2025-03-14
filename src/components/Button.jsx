import React from "react";

const Button = (props) => {
  const { type = "button", name = "Default", clickEvent } = props;
  return (
    <button type={type} onClick={clickEvent}>
      {name}
    </button>
  );
};

export default Button;

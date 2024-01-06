import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="border py-2 rounded-md hover:bg-white hover:text-black">
      {props.btnName}
    </button>
  );
};

export default Button;

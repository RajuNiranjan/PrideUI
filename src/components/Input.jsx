import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        className="p-3 w-full bg-transparent border rounded-md focus:outline-none "
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;

import React from "react";

import "./Button.css";

export const Button = ({ colorScheme, variant, size }) => {
  return (
    <button
      className={`${colorScheme || "white"} ${variant || ""} ${size || "md"}`}
    ></button>
  );
};

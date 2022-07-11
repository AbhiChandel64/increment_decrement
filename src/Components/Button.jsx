import React, { useEffect, useState } from "react";

const getSize = (size) => {
  switch (size) {
    case "sm":
      return { width: "40px", height: "20px" };
    case "md":
      return { width: "60px", height: "30px" };
    case "lg":
      return { width: "80px", height: "40px" };
    case "xl":
      return { width: "100px", height: "50px" };
    default:
      return { width: "60px", height: "30px" };
  }
};

const getTheme = (colorScheme, variant, size) => {
  const backgroundColor = colorScheme || "white";
  const { width, height } = getSize(size);

  switch (variant) {
    case "ghost":
      return {
        backgroundColor: "white",
        width,
        height,
        color: backgroundColor,
        outline: "None",
        border: "0px",
      };
    case "solid":
      return {
        backgroundColor,
        width,
        height,
        color: "white",
        border: `1px solid ${backgroundColor}`,
      };

    case "outline":
      return {
        backgroundColor: "white",
        width,
        height,
        color: backgroundColor,
        border: `1px solid ${backgroundColor}`,
      };

    default:
      return {
        backgroundColor,
        width,
        height,
        color: "white",
        border: `1px solid ${backgroundColor}`,
      };
  }
};

export const Button = ({ colorScheme, variant, size }) => {
  const [theme, setTheme] = useState(getTheme("", "", ""));

  useEffect(() => {
    setTheme(getTheme(colorScheme, variant, size));
  }, [colorScheme, variant, size]);

  return <button style={theme}> </button>;
};

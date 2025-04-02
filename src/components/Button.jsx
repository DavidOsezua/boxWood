import React from "react";
import styles from "./Button.module.css";

const Button = ({
  text,
  colored,
  width,
  radius,
  clickFunction,
  type,
  svg,
  svg2,
  style,
}) => {
  return (
    <button
      className={` flex gap-2 justify-center ${styles.colored} ${width} ${radius} ${style}`}
      onClick={clickFunction}
      type={type}
    >
      {svg2}
      {text}
      {svg}
    </button>
  );
};

export default Button;

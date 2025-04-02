import React from "react";
import styles from "./LogoComponent.module.css";

const LogoComponent = ({ inverted }) => {
  return (
    <div className={`${inverted ? styles.logoInverted : styles.logo}`}>
      <p className="font-bold">Boxwood Capital</p>
    </div>
  );
};

export default LogoComponent;

import React from "react";
import styles from "./Field.module.scss";

const Fields = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Fields;

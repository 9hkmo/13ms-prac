import { useState } from "react";
import styles from "./Button.module.scss";

export const Button = ({ text, isSelect, setIsSelect }) => {
  const [isClick, setIsClick] = useState(false);

  const buttonClick = () => {
    setIsClick(!isClick);
    if (!isSelect.include(text)) setIsSelect([...isSelect, text]);
    else setIsSelect(isSelect.filter((i) => i != text));
  };

  return (
    <div
      className={`${styles.button} ${isClick ? styles.click : ""}`}
      onClick={buttonClick}
    >
      {text}
    </div>
  );
};

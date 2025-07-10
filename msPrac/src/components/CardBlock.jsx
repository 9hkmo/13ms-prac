import styles from "./CardBlock.module.scss";

export const CardBlock = ({ children, img, isLeft }) => {
  return (
    <div className={`${styles.container} ${isLeft ? styles.isLeft : ""}`}>
      {children}
      <img src={img} />
    </div>
  );
};

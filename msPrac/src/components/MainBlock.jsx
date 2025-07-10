import styles from "./MainBlock.module.scss";

export const MainBlock = ({ num, title, desc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.number}>{num}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.linkButton}>바로가기 {" >"}</div>
    </div>
  );
};

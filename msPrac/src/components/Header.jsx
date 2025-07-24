import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { useState } from "react";

export const Header = () => {
  const [choice, setChoice] = useState(null);
  const nav = useNavigate();

  const choiceClick = (item) => {
    setChoice(item);
    nav(`/${item}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.navBox}>
          <p
            onClick={() => choiceClick("")}
            className={`${choice == "" && styles.here}`}
          >
            홈
          </p>
          <p
            onClick={() => choiceClick("notice")}
            className={`${choice == "notice" && styles.here}`}
          >
            공지사항
          </p>
          <p
            onClick={() => choiceClick("test")}
            className={`${choice == "test" && styles.here}`}
          >
            내 계약서 검토
          </p>
          <p
            onClick={() => choiceClick("test")}
            className={`${choice == "test" && styles.here}`}
          >
            내 근로정리
          </p>
          <p
            onClick={() => choiceClick("community")}
            className={`${choice == "community" && styles.here}`}
          >
            네편 현답
          </p>
        </div>
        <div className={styles.login}>LOGIN</div>
      </div>
    </div>
  );
};

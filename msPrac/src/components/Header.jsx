import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  const nav = useNavigate();

  return (
    <div className={styles.container}>
      <p onClick={() => nav("/")}>홈</p>
      <p onClick={() => nav("/notice")}>공지사항</p>
      <p onClick={() => nav("/notice")}>내 계약서 검토</p>
      <p onClick={() => nav("/notice")}>내 근로정리</p>
      <p onClick={() => nav("/notice")}>네면 햔딥</p>
    </div>
  );
};

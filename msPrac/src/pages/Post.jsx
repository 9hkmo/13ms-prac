import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/pages/Post.module.scss";
import { useEffect } from "react";

const data = { num: "주요", title: "내편 설명서", date: "2024.05.03" };

export const Post = () => {
  const { id } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleBox}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.date}>{data.date}</div>
        </div>
        <p>{data.num}</p>
      </div>
      <div className={styles.contents}>
        adsadadsdadsad asdasdasd asdasd asdas das dasd asd asd asd asdasdsad
      </div>
      <div className={styles.button} onClick={() => nav("/notice")}>
        목록 보기
      </div>
    </div>
  );
};

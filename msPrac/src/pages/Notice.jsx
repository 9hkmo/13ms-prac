import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/Notice.module.scss";

const lists = [
  {
    number: "주요",
    title: "내편 설명서",
    date: "2024.05.03",
  },
  {
    number: "주요",
    title: "내편 설명서",
    date: "2024.05.03",
  },
  {
    number: "주요",
    title: "내편 설명서",
    date: "2024.05.03",
  },
  {
    number: "주요",
    title: "내편 설명서",
    date: "2024.05.03",
  },
  {
    number: "주요",
    title: "내편 설명서",
    date: "2024.05.03",
  },
  {
    number: "주요",
    title: "내편 설명서",
    date: "2024.05.03",
  },
];

export const Notice = () => {
  const navigate = useNavigate();

  const postClick = (id) => {
    navigate(`/post/${id}`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <h1>공지사항</h1>
        <div className={styles.lists}>
          {lists.map((list, index) => (
            <div
              className={styles.list}
              key={index}
              onClick={() => postClick(index)}
            >
              <div className={styles.number}>{list.number}</div>
              <div className={styles.listContent}>
                <div className={styles.title}>{list.title}</div>
                <div className={styles.date}>{list.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pagebar}>
        {[1, 2, 3, 4, 5, ">"].map((num, index) => (
          <div key={index} className={styles.pageNumber}>
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

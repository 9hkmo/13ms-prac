import { useEffect, useState } from "react";
import styles from "../styles/pages/Community.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Community = () => {
  const [isAnswer, setIsAnswer] = useState(true);
  const [posts, setPosts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "http://43.202.217.156:8080/api/posting/list/1"
        );
        setPosts(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const hadleClick = (post) => {
    localStorage.setItem("postId", post.id);
    navigate(`/community/${localStorage.getItem("postId")}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={`${styles.topBox} ${isAnswer && styles.choice}`}>
          <span>네편 답변</span>
        </div>
        <div className={`${styles.topBox} ${!isAnswer && styles.choice}`}>
          <span>네편 정보</span>
        </div>
      </div>
      <div className={styles.popularContent}>
        <h1 className={styles.title}>인기게시글</h1>
        <div className={styles.popularList}>
          {posts &&
            posts
              .filter((_, i) => i < 3)
              .map((data) => (
                <div
                  className={styles.popular}
                  key={data.id}
                  onClick={() => navigate(`/community/${data.id}`)}
                >
                  <div className={styles.top}>
                    <span>Q</span>
                    <span>{data.title}</span>
                  </div>
                  <p>{data.content}</p>
                </div>
              ))}
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.title}>
          <h2>게시글</h2>
          <div className={styles.postingButton}>
            <span>게시글 작성</span>
          </div>
        </div>
        <div className={styles.list}>
          {posts &&
            posts.map((data) => (
              <div className={styles.post} key={data.id}>
                <div className={styles.postLeft}>
                  <div className={styles.top}>
                    <span>Q</span>
                    <span>{data.title}</span>
                  </div>
                  <p>{data.content}</p>
                </div>
                <div className={styles.postRight}>
                  <span className={styles.date}>{data.created_at}</span>
                  <div className={styles.linkButton}>
                    <span onClick={() => hadleClick(data)}>
                      자세히 보기 &rarr;
                    </span>
                  </div>
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

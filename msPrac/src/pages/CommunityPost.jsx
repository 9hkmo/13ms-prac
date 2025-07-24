import styles from "../styles/pages/CommunityPost.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

// const post = {
//   title: "Q. 계약직도 연장여부 미리 말해줘야하나요?",
//   name: "코카콜라",
//   date: "2024.04.11",
//   body: "정규직일때는 해고하기 힌딜전에 말해줘야 한다는 법이 있다던데요. 정규직일때는 해고하기 힌딜전에 말해줘야 한다는 법이 있다던데요. 정규직일때는 해고하기 힌딜전에 말해줘야 한다는 법이 있다던데요.",
//   result: {
//     title: "근무지 이름",
//     body: "asdasdsadasdasdasd\nasdasdasdasd\nasdasdasd\nasdasdsad\n",
//   },
//   comments: {
//     size: 0,
//   },
// };

export const CommunityPost = () => {
  const [post, setPost] = useState();
  const [comment, setComment] = useState("");

  useEffect(() => {
    try {
      const postId = localStorage.getItem("postId");
      const fetchPosts = async () => {
        const res = await axios.get(
          `http://43.202.217.156:8080/api/posting/${postId}`
        );
        setPost(res.data.data);
      };
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <>
      {post && (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.postContent}>
              <div className={styles.header}>
                <h1 className={styles.title}>Q. {post.title}</h1>
                <span className={styles.name}>{post.nickname}</span>
                <span className={styles.date}>{post.created_at}</span>
                <span className={styles.body}>{post.content}</span>
              </div>
              <div className={styles.resultContent}></div>
            </div>
          </div>
          <div className={styles.middleContent}>
            <div />
            <div className={styles.star}>
              <img src="" />
            </div>
            <div className={styles.listButton}>목록</div>
          </div>
          <div className={styles.commentContent}>
            <div className={styles.write}>
              <form>
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  rows={5}
                  placeholder="답변을 남겨주세요"
                  value={comment}
                >
                  <h2>{post.nickname}</h2>

                  <div className={styles.commentupload}>답변 달기</div>
                </textarea>
              </form>
              <div className={styles.commentList}>
                {/* {post.comments.size == 0 ? (
              <span>작성된 댓글이 없습니다.</span>
            ) : (
              <></>
            )} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

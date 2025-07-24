import { useState } from "react";
import styles from "../styles/pages/Posting.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Posting = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    type: 1,
    content: "",
  });

  const handleTitleChange = (e) => {
    setPost((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const handleContentChange = (e) => {
    setPost((prev) => ({
      ...prev,
      content: e.target.value,
    }));
  };

  const handleChoiceChange = (e) => {
    setPost((prev) => ({
      ...prev,
      type: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const data = {
        user_id: 1,
        worksheet_id: 1,
        title: post.title,
        content: post.content,
        type: post.type,
      };
      const res = await axios.post(
        "http://43.202.217.156:8080/api/posting",
        data
      );
      console.log(res);
      navigate(`/community`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>게시글 제목</h2>
          <input
            className={styles.input}
            type="text"
            placeholder="질문 제목을 입력해주세요"
            value={post.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className={styles.choiceBoard}>
          <h2>게시판 선택</h2>
          <div className={styles.choiceBox}>
            <label>
              <input
                type="radio"
                name="type"
                value="1"
                checked={post.type === "1"}
                onChange={handleChoiceChange}
              />
              네편 답변
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="0"
                checked={post.type === "0"}
                onChange={handleChoiceChange}
              />
              네편 정보
            </label>
          </div>
        </div>
        <div className={styles.body}>
          <h2>게시글 내용</h2>
          <textarea
            className={styles.input}
            type="text"
            placeholder="질문 제목을 입력해주세요"
            value={post.content}
            onChange={handleContentChange}
            row={20}
            aria-setsize={false}
          />
        </div>

        <div className={styles.plus}>
          <h2>내 결과지 가져오기(선택)</h2>
          <input
            className={styles.input}
            type="text"
            placeholder="질문 제목을 입력해주세요"
            value={"aa"}
            onChange={handleTitleChange}
          />
        </div>
      </div>
      <div className={styles.submit} onClick={handleSubmit}>
        등록하기
      </div>
    </div>
  );
};

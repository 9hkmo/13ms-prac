import { useState } from "react";
import { Button } from "../components/Button";
import styles from "../styles/pages/result.module.scss";

export const Result = () => {
  const [isSelect, setIsSelect] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>내 근로 결과지</div>
      <div className={styles.contents}>
        <div className={styles.text}>
          <h1>까페 근로 결과지</h1>
          <p>asdsadsdasdasdasdasdsadsd</p>
          <p>asdsadsdasdasdasdasdsadsd</p>
          <p>asdsadsdasdasdasdasdsadsd</p>
          <p>asdsadsdasdasdasdasdsadsd</p>
          <p>asdsadsdasdasdasdasdsadsd</p>
        </div>
        <div className={styles.optionList}>
          <div className={styles.optionTitle}></div>
          <div className={styles.buttonBox}>
            {["가산수당", "주휴수당", "야간근로수당"].map((text, index) => (
              <Button
                key={index}
                text={text}
                isSelect={isSelect}
                setIsSelect={setIsSelect}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.shareButton}>공유하기</div>
    </div>
  );
};

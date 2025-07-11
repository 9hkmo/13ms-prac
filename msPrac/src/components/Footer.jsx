import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContents}>
        <div className={styles.navBox}>
          <p>회사소개</p>
          <p>개인정보처리방침</p>
          <p>영상처리어쩌구저쩌구</p>
          <p>이용약관</p>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.icon}>1</div>
          <div className={styles.icon}>2</div>
        </div>
      </div>
      <div className={styles.bottomContents}>
        <div className={styles.info}>
          <h2>네편</h2>
          <p>ㅁㅇㅁㄴㅇ</p>
          <p>ㅁㅇㅁㄴㅇ</p>
          <p>ㅁㅇㅁㄴㅇ</p>
          <p>ㅁㅇㅁㄴㅇ</p>
          <p>ㅁㅇㅁㄴㅇ</p>
        </div>
        <div className={styles.rightBox}>
          <h2>010-1234-1234</h2>
          <p>ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ</p>
        </div>
      </div>
    </div>
  );
};

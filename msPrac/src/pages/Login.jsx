import { SignUpInputComponent } from "../components/SignUpInputComponent";
import styles from "../styles/pages/SignUp.module.scss";
import headerImg from "../assets/yourside-login-logo.svg";
export const Login = () => {
  return (
    <div className={styles.container}>
      <img src={headerImg} />
      <p className={styles.title}>로그인</p>
      <div className={styles.contents}>
        <SignUpInputComponent
          label="아이디"
          placeholder="아이디를 입력하세요."
        />

        <SignUpInputComponent
          label="비밀번호"
          placeholder="비밀번호를 입력하세요."
        />
        <div className={styles.inputButton}>로그인</div>
      </div>
    </div>
  );
};

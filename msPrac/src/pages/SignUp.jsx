import { SignUpInputComponent } from "../components/SignUpInputComponent";
import styles from "../styles/pages/SignUp.module.scss";
import headerImg from "../assets/yourside-signup-logo.svg";
export const SignUp = () => {
  return (
    <div className={styles.container}>
      <img src={headerImg} />
      <p className={styles.title}>회원가입</p>
      <div className={styles.contents}>
        <SignUpInputComponent
          label="아이디"
          placeholder="아이디를 입력하세요."
        />

        <SignUpInputComponent
          label="비밀번호"
          placeholder="비밀번호를 입력하세요."
        />

        <SignUpInputComponent
          label="이메일"
          placeholder="이메일을 입력하세요."
        />

        <SignUpInputComponent label="이름" placeholder="이름을 입력하세요." />

        <SignUpInputComponent
          label="닉네임"
          placeholder="닉네임을 입력하세요."
        />

        <div className={styles.inputButton}>가입하기</div>
      </div>
    </div>
  );
};

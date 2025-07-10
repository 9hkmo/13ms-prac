import styles from "./SignUpInputComponent.module.scss";

export const SignUpInputComponent = ({ label, placeholder }) => {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <input className={styles.input} placeholder={placeholder} />
    </div>
  );
};

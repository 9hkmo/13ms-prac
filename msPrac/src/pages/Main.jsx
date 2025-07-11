import { CardBlock } from "../components/CardBlock";
import { MainBlock } from "../components/MainBlock";
import styles from "../styles/pages/Main.module.scss";

export const Main = () => {
  return (
    <div className={styles.container}>
      <p className={styles.topContent}>
        이렇게
        <p>이용해보세요</p>
      </p>
      <CardBlock img={"test"} isLeft={false}>
        <MainBlock
          num={1}
          title="내 계약서 검토"
          desc="우선 나의 근로계약서가 제대로 된 계약서인지를 검토해봐야 해요. 근로 계약서에 유의깊게 봐야할 항목 확인!"
          isLeft={false}
        />
      </CardBlock>
      <CardBlock img={"test"} isLeft={true}>
        <MainBlock
          num={1}
          title="내 계약서 검토"
          desc="우선 나의 근로계약서가 제대로 된 계약서인지를 검토해봐야 해요. 근로 계약서에 유의깊게 봐야할 항목 확인!"
          isLeft={true}
        />
      </CardBlock>
      <CardBlock img={"test"} isLeft={false}>
        <MainBlock
          num={1}
          title="내 계약서 검토"
          desc="우선 나의 근로계약서가 제대로 된 계약서인지를 검토해봐야 해요. 근로 계약서에 유의깊게 봐야할 항목 확인!"
          isLeft={false}
        />
      </CardBlock>
    </div>
  );
};

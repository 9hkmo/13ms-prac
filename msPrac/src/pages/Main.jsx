import { CardBlock } from "../components/CardBlock";
import { MainBlock } from "../components/MainBlock";

export const Main = () => {
  return (
    <div>
      <CardBlock img={"test"} isLeft={true}>
        <MainBlock
          num={1}
          title="내 계약서 검토"
          desc="우선 나의 근로계약서가 제대로 된 계약서인지를 검토해봐야 해요. 근로 계약서에 유의깊게 봐야할 항목 확인!"
        />
      </CardBlock>
      <CardBlock img={"test"} isLeft={false}>
        <MainBlock
          num={1}
          title="내 계약서 검토"
          desc="우선 나의 근로계약서가 제대로 된 계약서인지를 검토해봐야 해요. 근로 계약서에 유의깊게 봐야할 항목 확인!"
        />
      </CardBlock>
      <CardBlock img={"test"} isLeft={true}>
        <MainBlock
          num={1}
          title="내 계약서 검토"
          desc="우선 나의 근로계약서가 제대로 된 계약서인지를 검토해봐야 해요. 근로 계약서에 유의깊게 봐야할 항목 확인!"
        />
      </CardBlock>
    </div>
  );
};

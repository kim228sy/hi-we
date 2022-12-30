import BoardWrite from "../../../src/components/units/board/write/boardWrite.container";

export default function BoardWritePage() {
  return (
    <BoardWrite isEdit={false} /> // 등록인지 수정인지 구별하는 변수
  );
}

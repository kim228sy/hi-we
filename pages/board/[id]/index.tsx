import { useRouter } from "next/router";
import { FETCH_BOARD } from "../../../src/components/units/board/board.queries";
import BoardDetail from "../../../src/components/units/board/detail/boardDetail.container";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";
import { useQuery } from "@apollo/client";
import CommentContainer from "../../../src/components/units/board/comment/write/commentWrite.container";
export default function ListDetailPage() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        // router.query.변수명=> 하위 폴더 [변수명]
        boardId: String(router.query.id),
      },
    }
  );

  return (
    // 해당글 작성자 이면 수정하기 버튼 활성화 , 걍 방문자 이면 리스트 눌렀을 때, 댓글 화면
    <>
      <BoardDetail data={data} />
      <CommentContainer />
    </>
  );
}

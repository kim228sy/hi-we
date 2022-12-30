import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./sponsorDetail.presenter";
import {
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_I_PICKED,
} from "../sponsor.queries";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { ISponsorDetailProps } from "../sponsor.types";
import { Modal } from "antd";

export default function BoardDetail(props: ISponsorDetailProps) {
  //
  const router = useRouter();

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      // router.query.변수명=> 하위 폴더 [변수명]
      useditemId: String(router.query.id),
    },
  });

  const DeleteBtn = async () => {
    try {
      deleteUseditem({
        variables: {
          useditemId: String(router.query.id),
        },
        refetchQueries: [{ query: FETCH_USED_ITEMS }],
      });
      Modal.success({
        content: "게시물이 삭제되었습니다.",
        onOk: () => router.push(`/Sponsor`),
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  const MoveToListPageBtn = () => {
    router.push(`/sponsor`); // 나중에 페이저번호 번수로 저장해서 바꿔야함 /p/아님
  };

  const MoveToEditPageBtn = () => {
    router.push(`/sponsor/${router.query.id}/Edit/`); // 나중에 페이저번호 번수로 저장해서 바꿔야함 /p/아님
  };

  // const likeBtn = () => {
  //   console.log(data?.fetchBoard.likeCount);
  //   if (typeof router.query.name !== "string") return;
  //   likeBoard({
  //     variables: {
  //       boardId: String(router.query.name),
  //     },
  //     refetchQueries: [
  //       {
  //         query: FETCH_BOARD,
  //         variables: {
  //           boardId: String(router.query.name),
  //         },
  //       },
  //     ],
  //   });
  // };
  // const dislikeBtn = () => {
  //   if (typeof router.query.name !== "string") return;
  //   dislikeBoard({
  //     variables: {
  //       boardId: String(router.query.name),
  //     },
  //     refetchQueries: [
  //       {
  //         query: FETCH_BOARD,
  //         variables: {
  //           boardId: String(router.query.name),
  //         },
  //       },
  //     ],
  //   });
  // };

  return (
    <>
      <BoardDetailUI
        data={data?.fetchUseditem}
        MoveToListPageBtn={MoveToListPageBtn}
        MoveToEditPageBtn={MoveToEditPageBtn}
        DeleteBtn={DeleteBtn}
        // dislikeBtn={dislikeBtn}
        // likeBtn={likeBtn}
      />
    </>
  );
}

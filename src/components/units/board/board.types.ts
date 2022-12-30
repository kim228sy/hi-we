import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import { IBoard, IQuery } from "../../../commons/types/generated/types";

export interface IBoardListProps {
  MoveToWritePageBtn: () => void;
  onClickRefetch: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onMovetoPageForSearch: (e: MouseEvent<HTMLSpanElement>) => void;
  setIsLastPage: Dispatch<SetStateAction<number>>;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  data?: Pick<IQuery, "fetchBoards">;
  ListDetail?: Pick<IQuery, "fetchBoard">;
  startPage: number;
  lastPageStandard: number;
  isLastPage: number;
  isClicked: boolean;
  keyword: string;
}

export interface IListPaginationUIProps {
  onClickRefetch: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  setIsLastPage: Dispatch<SetStateAction<number>>;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  data?: Pick<IQuery, "fetchBoards">;
  startPage: number;
  lastPageStandard: number;
  isLastPage: number;
  isClicked: boolean;
}

export interface IBoardDetailProps {
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardDetailUIProps {
  data?: IBoard;
  MoveToListPageBtn: () => void;
  MoveToEditPageBtn: () => void;
  DeleteBoardBtn: () => void;
  likeBtn: () => void;
  dislikeBtn: () => void;
}

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  addressTotal?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

export interface IBoardWriteUIProps {
  InputFunction: {
    writer: (e: ChangeEvent<HTMLInputElement>) => void;
    password: (e: ChangeEvent<HTMLInputElement>) => void;
    title: (e: ChangeEvent<HTMLInputElement>) => void;
    contents: (e: ChangeEvent<HTMLInputElement>) => void;
    youtubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  SignupChk: () => void;
  onClickUpdateBtn: () => void;
  onClickFindAddressModal: () => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrls: string[];
  writerMsg: string;
  pwdMsg: string;
  titleMsg: string;
  contentsMsg: string;
  isRatio: boolean;
  isModal: boolean;

  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

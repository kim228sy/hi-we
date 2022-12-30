import { Dispatch, MouseEvent, SetStateAction } from "react";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IUseditem, IQuery } from "../../../commons/types/generated/types";

export interface ISponsorListUIProps {
  // item: IUseditem;
  item: any;
  onClickDetail: (id: string, img: string) => () => void;
  onClickPick: (parm: string) => () => void;
  IPick: Pick<IQuery, "fetchUseditemsIPicked"> | undefined;
}

export interface ISponsorWriteProps {
  data?: IUseditem;
}
export interface IUseForm {
  name: string;
  remarks: string;
  price: number;
  contents: string;
}

export interface ISponsorWriteUIProps {
  onChangeContents: (value: string) => void;
  register: UseFormRegister<IUseForm>;
  handleSubmit: UseFormHandleSubmit<IUseForm>;
  onClickCreateItem: (data: IUseForm) => void;
  formState: FormState<IUseForm>;
  fileUrls: string[];
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickUpdate: (data: IUseForm) => Promise<void>;
  data?: IUseditem;
}

export interface IListPaginationUIProps {
  onClickRefetch: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  setIsLastPage: Dispatch<SetStateAction<number>>;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  data?: Pick<IQuery, "fetchUseditems">;
  startPage: number;
  lastPageStandard: number;
  isLastPage: number;
  isClicked: boolean;
}

export interface ISponsorDetailProps {
  data?: Pick<IQuery, "fetchUseditem">;
}

export interface ISponsorDetailUIProps {
  data?: IUseditem;
  MoveToListPageBtn: () => void;
  MoveToEditPageBtn: () => void;
  DeleteBtn: () => void;
  // likeBtn: () => void;
  // dislikeBtn: () => void;
}

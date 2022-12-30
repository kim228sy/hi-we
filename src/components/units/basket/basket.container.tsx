import { useRouter } from "next/router";
import BasketUI from "./basket.presenter";

export default function Basket() {
  const router = useRouter();
  const onClickDetail = (boardId: string) => {
    router.push(`/CreateItemSuccess/${boardId}`);
  };
  return <BasketUI onClickDetail={onClickDetail} />;
}

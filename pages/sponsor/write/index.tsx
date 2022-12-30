import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/store";
import SponsorWriteContainer from "../../../src/components/units/usedItem/write/sponsorWrite.container";

export default function CreateItemPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState); // eslint-disable-line no-unused-vars
  setIsEdit(false);
  return <SponsorWriteContainer />;
}

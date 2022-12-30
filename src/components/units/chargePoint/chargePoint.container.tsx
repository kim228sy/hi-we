import { useRecoilState } from "recoil";
import { withAuth } from "../../commons/hoc/withAuth";
import { userInfoState } from "../../../commons/store";
import Head from "next/head";

import { useState } from "react";
import ChargePointUI from "./chargePoint.presenter";
import { v4 as uuidv4 } from "uuid";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  IMP: any;
};

const CREATE_POINT = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

function ChargePointContainer() {
  const router = useRouter();

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT);
  const [userInfo] = useRecoilState(userInfoState);
  // const client = useApolloClient();
  const priceList = [500, 1000, 2000, 5000, 10000, 30000, 50000, 100000];
  const [selectPrice, setSelectPrice] = useState(0);
  const [isSelect, setIsSelect] = useState(false);

  const [isClick, setIsClick] = useState(Array(8).fill(false));

  const onSelect =
    (index: number) => (event: { target: { value: number } }) => {
      setIsSelect(true);
      setIsClick(isClick.fill(false));
      const copy = [...isClick];
      copy[index] = true;
      setIsClick(copy);
      setSelectPrice(event.target.value);
    };

  const onClickPrice = async () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    await IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        merchant_uid: `ORD20180131-00000${uuidv4()}`,
        name: "포인트충전",
        amount: selectPrice,
        buyer_email: userInfo.email,
        buyer_name: userInfo.name,
        // buyer_tel: "010-4242-4242",
        // buyer_address: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        // m_redirect_url: "http://localhost:3000/",
      },
      async (rsp: any) => {
        if (rsp.success) {
          const impUid = rsp.imp_uid;
          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid,
              },
            });

            Modal.success({
              content: "포인트 충전이 완료되었습니다.",
              onOk: () => router.push(`/myaccount`),
            });
          } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
          }

          // const resultUserInfo = await client.mutate({
          //   mutation: CREATE_POINT_TRANSACTION_OF_LOADING,
          //   variables: {
          //     impUid,
          //   },
          // });
        } else {
          Modal.error({ content: "결제 실패했습니다. 다시 시도해주십시오." });
        }
      }
    );
  };

  return (
    <>
      <div>
        <Head>
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          ></script>
          <script
            type="text/javascript"
            src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
          ></script>
        </Head>
      </div>

      <ChargePointUI
        data={userInfo}
        onClickPrice={onClickPrice}
        priceList={priceList}
        onSelect={onSelect}
        selectPrice={selectPrice}
        isClick={isClick}
        isSelect={isSelect}
      />
    </>
  );
}

export default withAuth(ChargePointContainer);

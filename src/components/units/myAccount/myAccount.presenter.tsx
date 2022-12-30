import * as s from "./myAccount.styles";
import Link from "next/link";

export default function MyAccountUI() {
  return (
    <s.Wrapper>
      <s.Main>
        <s.WrapperButton>
          <Link href={"/ChargePoint"}>
            <s.Button>
              <s.CustomPaid />
              <p>충전하기</p>
            </s.Button>
          </Link>
          <Link href={"/sellHistory"}>
            <s.Button>
              <s.CustomStorefront />
              <p>찜한친구</p>
            </s.Button>
          </Link>
          <Link href={"/purchaseHistory"}>
            <s.Button>
              <s.CustomCreditCard />
              <p>후원 내역</p>
            </s.Button>
          </Link>
          <Link href={"/basket"}>
            <s.Button>
              <s.CustomAccountCircle />
              <p>모아보기</p>
            </s.Button>
          </Link>
        </s.WrapperButton>
      </s.Main>
    </s.Wrapper>
  );
}

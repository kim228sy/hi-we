import { useApolloClient, useMutation } from "@apollo/client";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "../user.queries";
import LoginUI from "./login.presenter";
import { Modal } from "antd";
import { useRouter } from "next/router";

export const schema = yup.object({
  email: yup
    .string()
    .email("@까지 정확하게 입력하세요.")
    .required("이메일을 입력하세요"),
  password: yup
    .string()
    .min(1, "최소 1자리 이상 입력하세요")
    // .max(8, "8자리 이하로 입력하세요")
    .required("비밀번호를 입력하세요"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //   "영문, 숫자, 특수문자는 필수 입력 값입니다."
  // ),
});

export default function LoginContainer() {
  const router = useRouter();
  const client = useApolloClient();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  const { register, handleSubmit, getValues, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: any) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });

      const accessToken = result.data?.loginUser.accessToken || "";

      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });

      const userInfo = resultUserInfo.data?.fetchUserLoggedIn;

      setAccessToken(accessToken);
      setUserInfo(userInfo);

      if (userInfo) {
        router.push(`/myaccount`);
      } else {
        Modal.warning({ content: "로그인이 필요합니다." });
      }
    } catch (error) {
      console.log("LoginError", error);
      // if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <LoginUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLogin={onClickLogin}
    />
  );
}

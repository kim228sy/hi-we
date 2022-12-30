import styled from "@emotion/styled";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export const WarningDiv = styled.div`
  color: red;
  margin-bottom: 20px;
`;
interface IWarningProps {
  errormsg?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}
export default function Warning(props: IWarningProps) {
  return <WarningDiv>{props.errormsg}</WarningDiv>;
}

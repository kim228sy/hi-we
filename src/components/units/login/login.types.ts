import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  FormState,
  Merge,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ILoginUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickLogin: SubmitHandler<FieldValues>;
}

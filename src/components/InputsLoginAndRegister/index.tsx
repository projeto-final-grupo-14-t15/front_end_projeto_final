import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { ThemeP2_500 } from "../../styles/Typography";
import { StyledFieldset } from "./styledInput";

interface IInputProps {
  labelText?: string;
  placeHolder?: string;
  errors?: FieldError;
  type: undefined | "email" | "password" | "text" | "checkbox" | "radio";
  register?: UseFormRegisterReturn<string>;
  value?: string;
  defaultValue?: string;
}

export function Input({
  labelText,
  placeHolder,
  register,
  errors,
  type,
  value,
  defaultValue,
}: IInputProps) {
  return (
    <StyledFieldset>
      <label htmlFor={register?.name} className={register?.name}>
        {" "}
        {labelText}{" "}
      </label>
      <input
        type={type}
        id={register?.name}
        placeholder={placeHolder}
        {...register}
        value={value}
        defaultValue={defaultValue}
      />
      {errors ? (
        <ThemeP2_500 className="error"> {errors.message} </ThemeP2_500>
      ) : null}
    </StyledFieldset>
  );
}

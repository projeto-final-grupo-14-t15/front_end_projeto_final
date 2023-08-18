import { StyledFieldset } from "./styledInput";

interface IInputProps {
  labelText?: string;
  placeHolder?: string;
  errors?: any;
  type: undefined | "email" | "password" | "text" | "checkbox" | "radio";
  register?: any;
  value?: any;
}

export function Input({
  labelText,
  placeHolder,
  register,
  errors,
  type,
  value,
}: IInputProps) {
  return (
    <StyledFieldset>
      <label htmlFor={register.name} className={register.name}>
        {" "}
        {labelText}{" "}
      </label>
      <input
        type={type}
        id={register.name}
        placeholder={placeHolder}
        {...register}
        value={value}
      />
      {errors && <p className="error"> {errors.message} </p>}
    </StyledFieldset>
  );
}

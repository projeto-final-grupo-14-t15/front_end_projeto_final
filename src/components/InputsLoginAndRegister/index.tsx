import { StyledFieldset } from "./styledInput";

interface IInputProps {
  labelText: string;
  placeHolder: string;
  errors?: any;
  type: undefined | "email" | "password";
  register?: any;
}

export function Input({
  labelText,
  placeHolder,
  register,
  errors,
  type,
}: IInputProps) {
  return (
    <StyledFieldset>
      <label htmlFor={register.name}> {labelText} </label>
      <input
        type={type}
        id={register.name}
        placeholder={placeHolder}
        {...register}
      />
      {errors && <p className="error"> {errors.message} </p>}
    </StyledFieldset>
  );
}

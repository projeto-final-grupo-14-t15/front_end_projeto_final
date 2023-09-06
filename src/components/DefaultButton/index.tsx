import { StyledButton } from "./style";

interface IButtonProps {
  text: string;
  backgroundcolor: string;
  textcolor: string;
  bordercolor: string;
  type: "button" | "submit" | "reset" | undefined;
  buttonFunction?: () => void;
}

export const DefaultButton = ({
  text,
  backgroundcolor,
  textcolor,
  bordercolor,
  type,
  buttonFunction,
}: IButtonProps) => {
  return (
    <StyledButton
      backgroundcolor={backgroundcolor}
      textcolor={textcolor}
      bordercolor={bordercolor}
      type={type}
      onClick={buttonFunction ? () => buttonFunction() : undefined}
    >
      {text}
    </StyledButton>
  );
};

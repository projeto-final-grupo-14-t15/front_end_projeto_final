import { StyledButton } from "./style";

interface IButtonProps {
    text: string;
    color: string;
    textcolor:string;
    bordercolor:string;
    type:"button" | "submit" | "reset" | undefined;
    buttonFunction:any;
  }

export const DefaultButton = ({text, color, textcolor,bordercolor,type,buttonFunction}:IButtonProps) => {
    return (
        <StyledButton color={color} textcolor={textcolor} bordercolor={bordercolor} type={type} onClick={buttonFunction}>
            {text}
        </StyledButton>
    )
}
import { StyledButton } from "./style";

interface IButtonProps {
    text: string;
    backgroundColor: string;
    textcolor:string;
    bordercolor:string;
    type:"button" | "submit" | "reset" | undefined;
    buttonFunction:any;
  }

export const DefaultButton = ({text, backgroundColor, textcolor,bordercolor,type,buttonFunction}:IButtonProps) => {
    return (
        <StyledButton backgroundColor={backgroundColor} textcolor={textcolor} bordercolor={bordercolor} type={type} onClick={buttonFunction}>
            {text}
        </StyledButton>
    )
}
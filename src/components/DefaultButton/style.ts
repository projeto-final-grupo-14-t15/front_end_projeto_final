import styled from "styled-components";

interface TColor {
    backgroundColor: string;
    textcolor: string;
    bordercolor:string;
  }

export const StyledButton = styled.button<TColor>`
    border:1px solid ${({ bordercolor }: TColor) => `var(${bordercolor})`};
    border-radius: 4px;
    padding: 8px 15px;
    background-color: ${({ backgroundColor }: TColor) => `var(${backgroundColor})`};
    color: ${({ textcolor }: TColor) => `var(${textcolor})`};
    transition:400ms;
    font-size:14px;
    font-weight:500;
    width:fit-content;

    &&:hover{
        transform:scale(1.02);
        filter:brightness(1.05);
    }
`
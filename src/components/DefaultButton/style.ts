import styled from "styled-components";

interface TColor {
    color: string;
    textcolor: string;
    bordercolor:string;
  }

export const StyledButton = styled.button<TColor>`
    border:1px solid ${({ bordercolor }: TColor) => `var(${bordercolor})`};
    border-radius: 4px;
    padding: 8px 15px;
    background-color: ${({ color }: TColor) => `var(${color})`};
    color: ${({ textcolor }: TColor) => `var(${textcolor})`};
    transition:400ms;

    &&:hover{
        transform:scale(1.02);
        filter:brightness(1.05);
    }
`
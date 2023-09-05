import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { styled as styledsc } from "styled-components";
import { css } from "styled-components";

interface IStyledParagraphProps {
  $fontWeight?: "one" | "two" | "three";
  $fontColor?: "greyBold" | "grey" | "red";
  $textAlign?: "center" | "left" | "right";
}

export const CssTextField = styled(TextField)({
  width: "100%",
  padding: "0 10px",

  "& .MuiInputLabel-root": {
    fontSize: "16px",
    padding: "0 7px",
    margin: "0 7px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    fontSize: "19px",
    padding: "0 7px",
  },
  "& .MuiInputBase-input, & .MuiOutlinedInput-input": {
    fontSize: "16px",
    width: "100%",
  },
  "& .description": {
    height: "50px",
  },
  "& label.Mui-focused": {
    color: "#var(--color-brand1)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--color-brand1)",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    "& fieldset": {
      borderColor: "#343B41",
    },
    "&:hover fieldset": {
      borderColor: "var(--color-brand2)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--color-brand1)",
    },
  },
});

export const StyledParagraph = styledsc.p<IStyledParagraphProps>`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.8;

  text-align: ${({ $textAlign }) => $textAlign};

  ${({ $fontWeight }) => {
    switch ($fontWeight) {
      case "one":
        return css`
          font-size: 16px;
          font-weight: 700;
        `;
      case "two":
        return css`
          font-size: 16px;
          font-weight: 600;
        `;
      case "three":
        return css`
          font-size: 16px;
          font-weight: 400;
        `;
    }
  }}

  ${({ $fontColor }) => {
    switch ($fontColor) {
      case "greyBold":
        return css`
          color: #121214;
        `;
      case "grey":
        return css`
          color: #343b41;
        `;
      case "red":
        return css`
          color: #e60000;
        `;
      default:
        return css`
          color: #373a3e;
        `;
    }
  }}
`;

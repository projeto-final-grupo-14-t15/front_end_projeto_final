import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import {styled as styledsc} from 'styled-components';
import { css } from 'styled-components';


interface IStyledParagraphProps {
  $fontWeight?: 'one' | 'two' | 'three';
  $fontColor?: 'greyBold' | 'grey' | 'red';
  $textAlign?: 'center' | 'left' | 'right';
}

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#0C6B38',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0C6B38',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px',
    '& fieldset': {
      borderColor: '#343B41',
    },
    '&:hover fieldset': {
      borderColor: '#04C35C',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0C6B38',
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
      case 'one':
        return css`
          font-size: 16px;
          font-weight: 700;
        `;
      case 'two':
        return css`
          font-size: 16px;
          font-weight: 600;
        `;
      case 'three':
        return css`
          font-size: 16px;
          font-weight: 400;
        `;
    }
  }}

  ${({ $fontColor }) => {
    switch ($fontColor) {
      case 'greyBold':
        return css`
          color: #121214;
        `;
      case 'grey':
        return css`
          color: #343B41;
        `;
      case 'red':
        return css`
          color: #E60000;
        `;
      default:
        return css`
          color: #373A3E;
        `;
    }
  }}
`;

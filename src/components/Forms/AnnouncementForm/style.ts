import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  
  
  .radioContainer {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    cursor: pointer;
  }

  .button {
    float: left;
    margin: 0 5px 0 0;
    width: 139px;
    height: 40px;
    position: relative;
    cursor: pointer;
    border: 1.5px solid var(--color-grey4);
  }

  .button label,
  .button input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .button input[type="radio"] {
    opacity: 0.011;
    z-index: 100;
  }

  .button input[type="radio"]:checked + label {
    background: var(--color-brand1);
    color: var(--color-whiteFixed);

    border-radius: 4px;
  }

  .button label {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 90;
    line-height: 1.8em;
    font-family: "Inter";
    font-weight: 600;
    font-size: 16px;
  }

  .checkbox {
    display: flex;
    justify-content: center;
  }

  .labelPhotos {
    margin-top: -18px;
    margin-bottom: -7px;
  }

  .errorPhotos {
    margin-top: -23px;
  }

  .pairInputBox {
    display: flex;
    justify-content: space-between;
  }
`;

// export const StyledDivReturnToLogin = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   align-items: center;
// `;

// export const StyledFieldset = styled.fieldset`
//   border: none;
//   p {
//     max-width: 25ch;
//   }
// `;

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// export const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// export const reactSelectStyle = {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   control: (baseStyles: any, state: any) => ({
//     ...baseStyles,
//     fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
//     fontWeight: "300",
//     fontSize: "1rem",
//     lineHeight: "1.4375em",
//     letterSpacing: "0.00938em",
//     borderRadius: "15px",
//     minHeight: "56px",
//     marginTop: "-13px",
//     maxWidth: "74vw",
//     borderColor: "rgba(0, 0, 0, 0.87)",
//     color: "rgba(0, 0, 0, 0.4)",
//     cursor: "text",
//     border: state.isSelected ? "none" : "1px solid rgba(0, 0, 0, 0.87)",
//     outline: state.isFocused ? "2px solid #0C6B38" : "none",
//     paddingLeft: "6px",
//   }),
// };

// export const StyleMuiSelector = {
//   width: "100%",
//   "& label.Mui-focused": {
//     color: "#0C6B38",
//   },
//   "& .MuiInput-underline:after": {
//     borderBottomColor: "#0C6B38",
//   },
//   "& .MuiOutlinedInput-root": {
//     borderRadius: "15px",
//     "& fieldset": {
//       borderColor: "#343B41",
//     },
//     "&:hover fieldset": {
//       borderColor: "#04C35C",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#0C6B38",
//     },
//   },
// };

// export const StyleMuiSelectorMidWidth = {
//   width: "45%",
//   "& label.Mui-focused": {
//     color: "#0C6B38",
//   },
//   "& .MuiInput-underline:after": {
//     borderBottomColor: "#0C6B38",
//   },
//   "& .MuiOutlinedInput-root": {
//     borderRadius: "15px",
//     "& fieldset": {
//       borderColor: "#343B41",
//     },
//     "&:hover fieldset": {
//       borderColor: "#04C35C",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#0C6B38",
//     },
//   },
// };

// export function getStyles(
//   name: string,
//   personName: readonly string[],
//   theme: Theme
// ) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

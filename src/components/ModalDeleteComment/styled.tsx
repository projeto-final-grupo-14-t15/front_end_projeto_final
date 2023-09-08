import styled from "styled-components";
export const StyledCommentDelete = styled.div`
  height: 150px;
  width: 375px;
  padding: 13px;
  .addressInfoContainer {
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    padding: 0 13px;
  }
  .addressInfoContainer fieldset input {
    width: 100%;
    display: flex;
  }
  input {
    width: 90%;
  }
  label {
    width: 90%;
  }
  .buttonContainer {
    display: flex;

    justify-content: space-around;
    margin-top: 37px;
  }
  form {
    margin-top: 30px;
  }
  p {
    width: 90%;
    margin: 0 auto;
  }
  .cancelButton {
    padding: 8px 15px;
    background-color: black;
    color: var(--color-whiteFixed);
    transition: 400ms;
    font-size: 14px;
    font-weight: 500;
    width: fit-content;
    border-radius: 4px;
    border: 1px solid black;
  }
`;

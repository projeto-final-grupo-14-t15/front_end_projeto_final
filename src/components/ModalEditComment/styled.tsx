import styled from "styled-components";
export const StyledCommentEdit = styled.div`
  height: 100%;
  width: 375px;
  padding: 13px;
  .addressInfoContainer {
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: space-around;
  }
  .addressInfoContainer fieldset input {
    width: 100%;
  }
  input {
    width: 100%;
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
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
  p {
    width: 90%;
    margin: 0 auto;
  }
  button {
    align-self: flex-end;
    margin-top: 13px;
    margin-right: 13px;
  }

  .btns-box{
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

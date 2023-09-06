import styled from "styled-components";
export const StyledCommentEdit = styled.div`
  height: 200x;
  width: 375px;
  .container__form-comment {
    position: relative;
  }

  .container__form-comment button {
    position: absolute;
    right: 60px;
    bottom: 4px;

  }

  form {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
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

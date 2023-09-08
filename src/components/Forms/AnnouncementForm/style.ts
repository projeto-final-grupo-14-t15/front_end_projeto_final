import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 23px;

  .is-active-box{
    display: flex;
    align-items: center;
  }
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

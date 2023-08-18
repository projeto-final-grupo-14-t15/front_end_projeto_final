import styled from "styled-components";

export const StyledRegisterMain = styled.div`
  background-color: var(--color-grey8);
  overflow: hidden;
  margin-top: 5%;
  margin-bottom: 90px;

  .radioContainer {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    margin-top: 26px;
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

  p {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .personalInfo {
    display: block;
    width: 80%;
    margin: 0 auto;
    margin-top: 32px;
  }
  .checkbox {
    display: flex;
    justify-content: center;
  }
  .form_Container {
    padding-bottom: 44px;
    background-color: var(--color-whiteFixed);
    width: 95%;
    margin: 0 auto;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 19px;
    width: 80%;
    height: 48px;
  }
  input {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 80%;
    margin: 0 auto;
    border: 2px solid var(--color-grey7);
    border-radius: 4px;
    text-decoration: none;
  }

  .forgot_Password {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: end;
    margin-top: 9px;
  }
  h3 {
    display: flex;
    width: 80%;
    margin: 0 auto;
    padding-top: 44px;
  }
  .accountType {
    display: block;
    width: 80%;
    margin: 0 auto;
    margin-top: 28px;
  }
  .error {
    display: block;
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .form_Container {
      width: 400px;
    }
  }
`;

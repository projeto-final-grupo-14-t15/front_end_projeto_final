import styled from "styled-components";

export const StyledLogin = styled.div`
  background-color: var(--color-grey8);
  overflow: hidden;
  margin-top: 5%;

  .form_Container {
    height: 542px;
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
  p {
    display: flex;
    justify-content: center;
    margin-top: 20px;
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
  .error {
    display: block;
    width: 80%;
    margin: 0 auto;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 19px;
    height: 48px;
    width: 80%;
    color: var(--color-grey0);
    margin: 0 auto;
    border: 2px solid var(--color-grey4);
    border-radius: 4px;
    text-decoration: none;
    margin-top: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    :hover {
      background-color: var(--Grey-03);
    }
  }
  @media (min-width: 768px) {
    .form_Container {
      width: 400px;
    }
  }
`;

import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-1);

  label {
    color: var(--Grey-05);
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 8px;
    margin-top: 22px;
    font-family: var(--font-family-1);
  }

  input {
    border: 1.5px solid var(--color-grey4);
    border-radius: 4px;
    border-radius: 4px;
    height: 48px;
    background-color: var(--Grey-03);
    color: var(--Grey-04);
    width: 80%;
    margin: 0 auto;

    padding-left: 16px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    font-family: var(--font-family-1);
  }
  .error {
    color: var(--Color-primary-02);
    flex-direction: inherit;
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
  }
`;

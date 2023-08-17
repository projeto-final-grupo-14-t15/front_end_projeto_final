import styled from "styled-components";

export const StyledFooter = styled.footer`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: var(--color-grey0);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-grey10);
  padding: 45px, 59px, 45px, 59px;

  div {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledFooterText = styled.p`
  font-weight: var(--font-body-2-weight-4);
  font-size: var(--font-body-2-size);
  line-height: var(--font-body-2-lh);
`;

export const StyledFooterButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: var(--color-grey2);
  color: var(--color-grey10);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  > img {
    width: 10px;
    height: 18px;
  }
`;

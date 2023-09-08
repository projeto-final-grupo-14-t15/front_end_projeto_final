import styled from "styled-components";

export const StyledCommentCard = styled.li`
  font-family: var(--font-family-1);
  .user-icon {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    padding: 7px;
    color: var(--color-grey10);
    background-color: var(--color-brand3);

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .comment-name {
    font-size: 16px;
    font-weight: 500;
  }
  .span-date {
    color: var(--color-grey4);
    font-size: 12px;
    font-weight: 300;
  }
  .comment-text {
    color: var(--color-grey2);
    font-weight: 400;
    font-size: 14px;
    line-height: 200%;
    margin-top: 8px;
  }
  .container__header-comment {
    display: flex;
    align-items: center;
    gap: 7px;
    justify-content: space-between;
  }
  .container__header-comment > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .container__btns {
    display: flex;
    gap: 10px;
  }
  button {
    border: none;
    background-color: transparent;
  }
`;

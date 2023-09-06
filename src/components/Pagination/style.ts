import styled from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  user-select: none;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    background: transparent;
    font-size: 30px;
    color: #4529e6;
    width: 50px;
    height: 50px;
  }
  button svg {
    transition: 200ms linear;
  }
  button svg:hover {
    color: #36007d;
    transform: scale(1.2);
  }
  button:disabled,
  button:disabled svg {
    cursor: auto;
    color: #868e96;
    transform: scale(1);
  }

  &.pagination-btn-box {
    display: flex;
    align-items: center;

    font-size: 13px;
    gap: 13px;
    font-weight: 400;
    color: #4529e6;
    .blue {
      font-weight: 700;
      padding: 5px;
    }
    .page-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 18px;
      height: 50px;
      cursor: pointer;
      padding: 7px;
      transition: 200ms linear;
    }
    .current-page {
      cursor: auto;
      color: #36007d;
      font-size: 21px;
      user-select: none;
    }
    .page-nav:hover {
      color: #36007d;
      transform: scale(1.2);
      font-size: 15px;
    }
    .current-page:hover {
      color: #36007d;
      font-size: 21px;
      transform: scale(1);
    }
    .no-hover:hover {
      color: #4529e6;
      transform: scale(1);
      font-size: 21px;
    }
  }
`;

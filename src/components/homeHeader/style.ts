import styled from "styled-components";

export const StyledHomeHeader = styled.header`
  width: 100%;
  height: 544px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  z-index: 3;
  margin-bottom: 40px;

  h1 {
    color: var(--color-grey10);
    text-align: center;
    z-index: 3;

    font-weight: 700;
    font-size: 3rem;

    h1 span {
      font-size: 2.5rem;
      width: 100%;
    }
  }

  background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2ff9ac74580391.5c347c867503a.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  &::before {
    content: "";

    position: absolute;

    z-index: 2;
    width: 100%;
    height: 100%;

    background: rgb(2, 0, 36);
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 0, 0, 0.5969559698879552) 45%,
      rgba(0, 0, 0, 0.13477109593837533) 100%
    );
  }
`;

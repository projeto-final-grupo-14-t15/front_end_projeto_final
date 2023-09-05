import styled from "styled-components";

export const StyledAnnouncementPage = styled.main`
  background: linear-gradient(
    to bottom,
    var(--color-brand1) 0%,
    var(--color-brand1) 40%,
    #000000 40%,
    var(--color-grey8) 40%,
    var(--color-grey8) 100%
  );
  padding-top: 10px;
  padding-bottom: 10px;

  .container-div {
    background-color: var(--color-grey10);
    padding: 45px;
    border-radius: 4px;
    font-family: var(--font-family-2);

    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .container-div h2 {
    font-size: var(--font-heading-6-lh);
    font-weight: var(--font-heading-6-weight-6);
  }

  .container__main-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .container__aside {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .photos-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  .container__photos img {
    width: 108px;
    height: 108px;
    border-radius: 4px;
  }
  .container__cover-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4.1px;
    max-height: 355px;
  }

  .container__new-comment p span {
    background-color: var(--color-grey7);
    color: var(--color-grey3);
    border-radius: 50px;
    padding: 7px;
    cursor: pointer;
  }

  .car-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .car-info-info {
    display: flex;
    gap: 10px;
  }
  .detailed-info {
    color: var(--color-brand1);
    background-color: var(--color-brand4);
    border-radius: 4px;
    padding: 5px;
  }
  .contaienr__user-info {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contaienr__user-info p {
    font-size: var(--font-body-1-size);
    font-weight: 400;
    color: var(--color-grey2);
    text-align: center;
  }
  .comments-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .icon-initials {
    background-color: var(--color-brand1);
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 180px;
    font-size: 36px;
    color: var(--color-grey10);
  }
  li {
    list-style: none;
  }
  main {
    display: grid;
    grid-template-columns: 61% 1fr; /* 61% para a primeira div e o restante para a segunda */
    gap: 6%;

    max-width: 80%;
    margin: 0 auto;
  }
  .container__aside-mobile {
    display: none;
  }
  .container__form-comment {
    position: relative;
  }
  .container__form-comment button {
    position: absolute;
    right: 4px;
    bottom: 4px;
  }

  @media (max-width: 1024px) {
    main {
      display: flex;
      flex-direction: column;
    }
    .container__aside {
      margin-top: 20px;
      display: none;
    }
    .container__aside-mobile {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
  @media (max-width: 700px) {
    .container__new-comment p {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .container__new-comment p span {
      width: fit-content;
    }
  }
`;

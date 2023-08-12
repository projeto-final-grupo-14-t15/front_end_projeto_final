import styled from "styled-components";

export const StyledFilter = styled.aside`
  background-color: variables.$color-white-fixed;

  top: 65px;
  z-index: 9;

  padding-top: 40px;

  display: flex;
  flex-direction: column;
  box-shadow: 0 0 32px variables.$color-grey-3;

  max-height: 90vh;
  overflow-y: auto;

  .clear-filter {
    width: 100%;
    padding: 1.3rem;

    font-size: 1.5rem;
    text-align: center;

    background-color: variables.$color-brand-2;
    color: variables.$color-grey-10;

    transition: 0.6s ease;
  }

  &:hover {
    background-color: variables.$color-brand-1;
  }

  &:active {
    background-color: variables.$color-sucess-3;
  }
 
  /* button {
    background-color: transparent;
    border: none;
    padding: 5px;
    opacity: 0.6;
    width: 100%;
    height: 100%;
  } */

  div {
    margin-bottom: 25px;
  }
  h2 {
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 18px;
    color: variables.$color-grey-1;
  }
  .filter-list {
    color: variables.$color-grey-3;
    font-weight: 500;
    list-style: none;
    padding: 0 10px;

    .selected {
      color: variables.$color-brand-2;
      font-weight: 600;
    }
    li {
      margin-bottom: 10px;

      transition: 0.3s ease;
      font-size: 1.75rem;
      color: variables.$color-grey-4;
      font-weight: 500;

      &:hover {
        color: variables.$color-grey-2;
      }
    }
  }
  .filter-button {
    display: flex;
    justify-content: left;
    width: 100%;
    font-family: var(--font-family-2);
    font-size: 12px;
    font-weight: 600;
    background-color: transparent;
    border: none;
    opacity: 0.6;
    gap: 20px
 
  
  }

  &::placeholder {
    color: variables.$color-grey-3;
    text-transform: uppercase;
  }
  transition: 0.4s ease;

  &.hidden-aside-filter {
    opacity: 0.4;
    top: -300vh;
  }

  .hidden-clear-filter {
    opacity: 0.3;
    transform: translateX(-100vw);
  }
  .filter-header {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;

  }
`;

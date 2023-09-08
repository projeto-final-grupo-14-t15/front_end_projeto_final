import styled from "styled-components";

export const StyledNavbar = styled.nav`
  .btn-dropdown-profile {
    border: none;
    background-color: transparent;
  }
  .drop-down-visibility-hidden {
    display: none;
  }
  .drop-down-visibility-visible {
    display: flex;
  }
  .link-login {
    color: var(--color-brand1);
    font-weight: 600;
    font-size: var(--font-body-1-size);
    transition: 300ms;
  }
  .link-login:hover {
    transform: scale(1.05);
  }
  .link-register {
    color: var(--color-grey0);
    border: 1px solid var(--color-grey4);
    font-weight: 600;
    font-size: var(--font-body-1-size);
    padding: 10px 20px;
    border-radius: 4px;
    transition: 300ms;
  }
  .link-register:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    .btn-dropdown-profile {
      display: none;
    }
  }
`;

import styled from "styled-components";

export const StyledAnnoucerPage = styled.main`
  background-color: var(--color-grey8);

  .container_header-user-info {
    background-color: var(--color-brand1);
    width: 100%;
    height: 220px;
  }

  .container_user-info {
    width: 1240px;
    max-width: 98%;
    margin: 0 auto;
    position: relative;
    bottom: 150px;
  }

  .container_announces {
    margin: 0 auto;
    width: 1340px;
    max-width: 98%;
  }
  .title-announces {
    position: relative;
    bottom: 70px;
    font-size: 2.5rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 35px;
    justify-items: center;
  }

  @media (max-width: 762px) {
    ul {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      justify-content: start;
    }
    li {
      flex-shrink: 0;
    }
  }

  .alert {
    width: 100%;
    height: 18vh;
    display: flex;
    justify-content: center;
  }
`;

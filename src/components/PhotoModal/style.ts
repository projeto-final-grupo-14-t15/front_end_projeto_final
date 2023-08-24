import styled from "styled-components";

export const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


  .modal {
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    gap: 10px;
  }

  .arrow {
    font-size: 25px;
  }

  .active {
    cursor: pointer;
  }

  .inactive {
    font-size: 25px;
    color: var(--color-grey4);
  }

  .expanded-img {
    max-width: 100%;
    max-height: 100%;
  }

  .pagination {
    font-size: 16px;
    padding-bottom: 10px;
  }
`;

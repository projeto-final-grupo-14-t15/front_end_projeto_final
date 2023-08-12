import styled from "styled-components";

export const StyledFilter = styled.aside`
  
  z-index: 9;
  height: 100%;

  padding-top: 10px;

  display: flex;
  flex-direction: column;
 
  max-height: 100%;
  overflow-y: auto;

  .filter-input {
        padding: 8px ;           
        width: 80%;     
        font-family: var(--font-family-2);
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;

        display: inline-block;

        &::placeholder{          
            text-transform: uppercase;
        }
  }

    transition: 0.4s ease;

  div {
    margin-bottom: 20px;
  }
  h2 {
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 18px;
    font-family: var(--font-family-2);
    color: black;
    
  }
  
  .filter-button {
    display: flex;
    justify-content: left;
    width: 90%;
    font-family: var(--font-family-2);
    font-size: 12px;
    font-weight: 600;
    background-color: transparent;
    border: none;
    opacity: 0.6;
    gap: 20px;
    margin-left: 10px;
    color: var(--color-grey3);
    text-transform: uppercase;
 
  
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
    margin-bottom: 40px;    
    display: flex;
    flex-direction: column;
    width: 272px;
    font-family: var(--font-family-2);
    font-size: 20px;
    color: var(--color-grey3);
    text-transform: uppercase;

  }
`

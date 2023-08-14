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
    width: 50%;
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


 
  .hidden-clear-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 38px;
    border-radius: 4px;
    border: 2px;
    background-color: #5126EA;
    color: white;
    
    
  }
  .filter-header {
    margin-bottom: 40px;    
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: var(--font-family-2);
    font-size: 20px;
    color: var(--color-grey3);
    text-transform: uppercase;

  }
`

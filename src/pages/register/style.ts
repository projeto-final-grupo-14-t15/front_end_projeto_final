import styled from "styled-components";

export const StyledRegisterMain = styled.main`
    width:100vw;
    height: max-content;
    background-color: var(--color-grey8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 46px;
    padding-bottom: 46px;
`

export const StyledRegisterDiv = styled.div`
    width:411px;
    height: max-content;
    padding: 45px;
    border-radius:4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--color-grey10);
    >h2{
        font-family: var(--font-family2);
    }
`

export const StyledForm = styled.form`
    width:315px;
    height: 1480px;
    font-family: var(--font-family1);
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    >label{
        font-family: var(--font-family1);
        font-weight: 500;
    }
    >input{
        width:100%;
        height:48px; 
        font-family: var(--font-family1);
        padding:16px;
        border-radius: 4px;
        border: 2px solid var(--color-grey7);
    }

    >div{
        display: flex;
        gap: 5px;
    }

`

export const StyledButton = styled.button`
    width:100%;
    height:48px;
    background-color: var(--color-brand1);
    border: 2px solid var(--color-brand1);
    border-radius:4px;
    color: var(--color-whiteFixed);
    font-size: 16px;
    font-weight: 600;
`
export const StyledButtonType = styled.button`
    width:50%;
    height:48px;
    background-color: var(--color-brand1);
    border: 2px solid var(--color-brand1);
    border-radius:4px;
    color: var(--color-whiteFixed);
    font-size: 16px;
    font-weight: 600;
    
`
export const StyledRadius = styled.input`   
color: red;

&:checked + label {
        background-color: var(--color-brand-1);
        color: var(--fixed-white);
}
`

export const StyledRaiosName = styled.label`
    width:50%;
    height:48px;
    background-color: var(--color-grey5);
    border: 2px solid var(--color-grey4);
    border-radius:4px;
    color: var(--color-whiteFixed);
    font-size: 16px;
    font-weight: 600;
    cursor:pointer;
    color: var(--color-grey0);
    text-align: center;
    padding:12px;
`
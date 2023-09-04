import styled from "styled-components";

export const StyledUserIcon = styled.div`
    display: flex;
    align-items: center;
    gap:5px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    
    span{
        width: 32px;
        height: 32px;
        background-color: var(--color-brand2);
        border-radius: 180px;
        color: white;
        padding: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

`
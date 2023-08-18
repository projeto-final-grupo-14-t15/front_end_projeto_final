import styled from "styled-components";

export const StyledDropDownMenu = styled.div`
@media (min-width: 1024px) {
    background-color: var(--color-grey9);
    position: relative;
    top: 90px;
    right: 144px;
    display: flex;
    flex-direction: column;
    box-shadow: -1px 2px 35px -20px rgba(0,0,0,0.75);
    border-radius: 4px;
    z-index: 10;

    a{
        color: var(--color-grey1);
        padding: 10px 20px;
        transition: 300ms;
    }
    a:hover{
        background-color:var(--color-grey7);
    }
    button{
        color: var(--color-grey1);
        padding: 10px 20px;
        transition: 300ms;
        border: none;
        background-color: transparent;
    }
    button:hover{
        background-color:var(--color-grey7);
    }
    
}
`
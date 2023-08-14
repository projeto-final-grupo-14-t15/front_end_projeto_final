import styled from "styled-components";

export const StyledCardUser = styled.div`
    background-color: var(--color-grey10);
    padding: 47px;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    .icon-initials{
        width: 104px;
        height: 104px;
        font-size: 36px;
        background-color: var(--color-brand2);
        border-radius: 180px;
        color: white;
        padding: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 13px 19px -7px rgba(0,0,0,0.49);
    }
    .tag-announcer{
        background-color: var(--color-brand4);
        color: var(--color-brand1);
        border-radius: 4px;
        padding: 5px;
    }
`
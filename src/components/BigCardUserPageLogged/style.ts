import styled from "styled-components";

export const StyledCardUser = styled.div`
    background-color: var(--color-grey10);
    padding: 47px;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family:var(--font-family-1);

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
        font-size: var(--font-body-2-size);
        font-weight: var(--font-body-2-weight-5);
        font-family:var(--font-family-2);

        border-radius: 4px;
        padding: 5px;
    }
    .text-user-name{
        color: var(--color-grey1);
        font-size: var(--font-heading-6-size);
        font-weight: var(--font-heading-6-weight-6);
    }
    .text-user-description{
        color: var(--color-grey2);
        font-size: var(--font-body-1-size);
        font-weight: var(--font-body-1-weight-4);
    }
`
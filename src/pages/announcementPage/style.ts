import styled from "styled-components";

export const StyledAnnouncementPage = styled.main`
    background: linear-gradient(to bottom, var(--color-brand1) 0%,var(--color-brand1) 35%,#000000 35%,white 35%,white 100%);
    padding-top: 10px;
    padding-bottom: 10px;
    .container-div{
        background-color: var(--color-grey10);
        padding: 15px;
        border-radius: 4px;
        border: 1px solid;
        height: 20vh;
        font-family: var(--font-family-2);
    }
    .container-div h2{
        font-size: var(--font-heading-6-lh);
        font-weight: var(--font-heading-6-weight-6);
    }

    .container__main-info{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .container__aside{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .photos-list{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
    .container__photos img{
        width: 100px;
        border-radius: 4px;
    }
    .container__cover-photo img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4.1px;
    }
    .container__new-comment{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .container__new-comment p span{
        background-color: var(--color-grey7);
        color: var(--color-grey3);
        border-radius: 50px;
        padding: 7px;
        cursor: pointer;
    }
    main{
        display: grid;
        grid-template-columns: 61% 1fr; /* 61% para a primeira div e o restante para a segunda */
        gap: 6%;

        max-width: 80%;
        margin: 0 auto;
    }
`

import styled from "styled-components";

export const StyledAnnoucerPage = styled.main`
    background-color: var(--color-grey8);
    .container_header-user-info{
        background-color: var(--color-brand1);
        width: 100%;
        height: 220px;
    }
    .container_user-info{
        width: 1240px;
        max-width: 98%;
        margin: 0 auto;
        position: relative;
        bottom: 150px;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 45px;     
    }
    
    .container_announces{
        margin: 0 auto;

        max-width: 90%;
        width: fit-content;
    }

    @media (max-width:762px) {
        ul{
            flex-wrap: nowrap;
            overflow-x: auto;
        }
        li{
            flex-shrink: 0;
        }
    }

`
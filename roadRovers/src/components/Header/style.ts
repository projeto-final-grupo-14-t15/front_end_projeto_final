import styled from "styled-components";

export const StyledHeader = styled.header`
    border-bottom: 2px solid var(--color-grey6);

    display: grid;
    grid-template-columns: 75% 25%;
    
    height: 80px;

    .container__logo{
        align-self: center;
        margin-left: 10%;
        cursor: pointer;
    }

    nav{
        padding-left: 10%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        height: 80px;
        border-left: 2px solid var(--color-grey6);
    }
    img {
        transition: 400ms;
    }
    img:hover{
        transform: scale(1.1);
    }

    .hamburger{
        display: none;
    }

    @media (max-width:1023px) {
        
        .hamburger{
            display: block;
            position: absolute;
            right: 5%;
            align-self: center;
            cursor: pointer;
        }
        nav{
            flex-direction: column;
            background-color: var(--color-whiteFixed);
            gap: 20px;

            position: absolute;
            right: 0px;
            top: 10vh;

            width: 100%;
            height: 100vh;

            a{
                padding: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        .visible{
            display: flex;
        }
        .hidden{
            display: none;
        }
        
    }
`
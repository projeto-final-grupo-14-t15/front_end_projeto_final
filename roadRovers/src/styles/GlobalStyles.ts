import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --color-brand1: #4529E6;
        --color-brand2: #5126EA;
        --color-brand3: #B0A6F0;
        --color-brand4: #EDEAFD;
        --color-grey0: #0B0D0D;
        --color-grey1: #212529;
        --color-grey2: #495057;
        --color-grey3: #868E96;
        --color-grey4: #ADB5BD;
        --color-grey5: #CED4DA;
        --color-grey6: #DEE2E6;
        --color-grey7: #E9ECEF;
        --color-grey8: #F1F3F5;
        --color-grey9: #F8F9FA;
        --color-grey10: #FDFDFD;
        --color-whiteFixed: #FFFFFF;
        --color-alert1: #CD2B31; 
        --color-alert2: #FDD8D8;
        --color-alert3: #FFE5E5;
        --color-sucess1: #18794E;
        --color-sucess2: #CCEBD7;
        --color-sucess2: #DDF3E4;
        --color-random1: #E34D8C;
        --color-random2: #C04277;
        --color-random3: #7D2A4D;
        --color-random4: #7000FF;
        --color-random5: #6200E3;
        --color-random6: #36007D;
        --color-random7: #349974;
        --color-random8: #2A7D5F;
        --color-random9: #153D2E;
        --color-random10: #6100FF;
        --color-random11: #5700E3;
        --color-random12: #30007D;
    }
    @media (min-width: 700px) {
        :root {
            font-size: 62.5%; // root font-size: 10px;
        }
    }
    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }
        body,html{
        width: 100vw;
        height: 100vh;
    }
    body {
        background: var(--color-grey0);
        color: var(--color-grey10);
        -webkit-font-smoothing: antialiased;
    }
    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
    }
    button {
        cursor: pointer;
    }
    button:hover {
        border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
    a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
    }
    a:hover {
        color: #535bf2;
    }
    filtro-text {
        font-family: 'Lexend', sans-serif;
    }
`;
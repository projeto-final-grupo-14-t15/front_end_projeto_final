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

        --font-family-1: 'Roboto', sans-serif;
        --font-family-2: 'Lexend', sans-serif;
        
        --font-heading-1-weight: 700;
        --font-heading-1-size: 44px;
        --font-heading-1-lh: 56px;

        --font-heading-2-weight: 600;
        --font-heading-2-size: 36px;
        --font-heading-2-lh: 45px;

        --font-heading-3-weight-5: 500;
        --font-heading-3-weight-6: 600;
        --font-heading-3-size: 32px;
        --font-heading-3-lh: 40px;

        --font-heading-4-weight-5: 500;
        --font-heading-4-weight-6: 600;
        --font-heading-4-size: 28px;
        --font-heading-4-lh: 35px;

        --font-heading-5-weight-5: 500;
        --font-heading-5-weight-6: 600;
        --font-heading-5-size: 24px;
        --font-heading-5-lh: 30px;

        --font-heading-6-weight-5: 500;
        --font-heading-6-weight-6: 600;
        --font-heading-6-size: 20px;
        --font-heading-6-lh: 25px;

        --font-heading-7-weight-5: 500;
        --font-heading-7-weight-6: 600;
        --font-heading-7-size: 16px;
        --font-heading-7-lh: 20px;

        --font-body-1-weight-4: 400;
        --font-body-1-weight-6: 600;
        --font-body-1-size: 16px;
        --font-body-1-lh: 28px;

        --font-body-2-weight-4: 400;
        --font-body-2-weight-5: 500;
        --font-body-2-size: 14px;
        --font-body-2-lh: 24px;

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
        background: var(--color-grey10);
        color: var(--color-grey0);
        -webkit-font-smoothing: antialiased;
    }
    body, input, button, textarea {
        font-family: var(--font-family-1)
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
`;
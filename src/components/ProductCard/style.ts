import styled from "styled-components";

export const StyledCard = styled.div`

    width: 312px;
    height: 350px;

    margin: 50px;
    .container__img-product{
        background-color: #E9ECEF;
        height: 152px;
    }
    .container__content-product{
        margin-top: 20px;

        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: space-around;
    }
    .card-description{
        color: var(--color-grey2);
    }
    .container__owner{
        display: flex;
        align-items: center;
        gap:5px;
    }
    .container__owner span{
        background-color: blue;
        border-radius: 180px;
        color: white;
        padding: 8px;
    }
    
    .container__car-info{
        display: flex;
        justify-content: space-between;
    }
    .info{
        display: flex;
        gap: 10px;
    }
    .info p{
        color: var(--color-brand1);
        background-color: var(--color-brand4);
        border-radius: 4px;
        padding: 5px;
    }
    .price{
        font-weight: var(--color-grey1);
    }
`
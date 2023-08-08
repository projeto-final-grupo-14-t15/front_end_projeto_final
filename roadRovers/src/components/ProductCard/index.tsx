import { StyledCard } from "./style"

export const ProductCard = () => {
    
    return(
        <StyledCard>

            <div className="container__img-product">

            </div>

            <div className="container__content-product">

                <h2> Maserati - Ghibli </h2>
                <p className="card-description"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</p>

                <div className="container__owner">
                    <span> SL </span>
                    <p> Samuel Leão </p>
                </div>

                <div className="container__car-info">

                    <div className="info">
                        <p> 0KM </p>
                        <p> 2019 </p>
                    </div>

                    <p className="price"> R$ 00.000,00 </p>
                </div>

            </div>

        </StyledCard>
    )
}
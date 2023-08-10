import { StyledCard } from "./style"

interface Iproduct {
    name: string;
    description: string;
    seller:string;
    km:string;
    year:string;
    price:string;
    higherThanFipe:boolean;
    active:boolean;
}

interface IProductProps {
    product:Iproduct;
}

export const ProductCard = ({product}:IProductProps) => {
    
    return(
        <StyledCard>

            <div className="container__img-product">

            
            {product.higherThanFipe ? null : <p className="icon-fipe"> $ </p>}
            {product.active ? <p className="icon-active"> Ativo </p> : <p className="icon-inactive"> Inativo</p>}

            </div>

            <div className="container__content-product">

                <h2> {product.name} </h2>
                <p className="card-description"> {product.description} </p>

                <div className="container__owner">
                    <span> SL </span>
                    <p> {product.seller} </p>
                </div>

                <div className="container__car-info">

                    <div className="info">
                        <p> {product.km}KM </p>
                        <p> {product.year} </p>
                    </div>

                    <p className="price"> R$ {product.price} </p>
                </div>

            </div>

        </StyledCard>
    )
}
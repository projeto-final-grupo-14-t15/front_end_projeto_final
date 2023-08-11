
import { IFilterResponse } from "../../interfaces/filterContext";
import { StyledCard } from "./style";
   
interface cardsProps {
   announcement:IFilterResponse;
}

export const ProductCard = ({announcement}:cardsProps) => {
   
   return (
      <StyledCard>
         <div className="container__img-product"></div>

         <div className="container__content-product">
            <h2> {announcement.brand} - {announcement.model} </h2>
            <p className="card-description">
               {announcement.description}
            </p>

            <div className="container__owner">
               <span> SL </span>
               <p> Samuel Leão </p>
            </div>

            <div className="container__car-info">
               <div className="info">
                  <p> `${announcement.km}KM` </p>
                  <p> {announcement.year} </p>
               </div>

               <p className="price"> `R${announcement.price}` </p>
            </div>
         </div>
      </StyledCard>
   );
};

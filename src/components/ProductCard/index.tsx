import { IFilterResponse } from "../../interfaces/filterContext";
import { UserIcon } from "../UserIcon";
import { StyledCard } from "./style";
   
interface cardsProps {
   announcement:IFilterResponse;
}

export const ProductCard = ({announcement}:cardsProps) => {
   
   return (
      <StyledCard>
         <div className="container__img-product">
            {announcement.photos ? <img src={announcement.photos[0].link} alt=""/> : <p>carregando...</p>}
            {announcement.higher_than_fipe ? null : <p className="icon-fipe"> $ </p>}
            {announcement.active ? <p className="icon-active"> Ativo </p> : <p className="icon-inactive"> Inativo</p>}
         </div>

         <div className="container__content-product">
            <h2> {announcement.brand} - {announcement.model} </h2>
            <p className="card-description">
               {announcement.description}
            </p>

            <UserIcon username={announcement.user.name}/>

            <div className="container__car-info">
               <div className="info">
                  <p> {announcement.km}KM </p>
                  <p> {announcement.year} </p>
             </div>

               <p className="price"> R$ {announcement.price} </p>
            </div>
         </div>
      </StyledCard>
   );
};

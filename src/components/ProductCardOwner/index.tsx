import { IFilterResponse } from "../../interfaces/announcementsContext.types";
import { DefaultButton } from "../DefaultButton";
import { StyledCard } from "./style";
   
interface cardsProps {
   announcement:IFilterResponse;
}

export const ProductCardAnnoucer = ({announcement}:cardsProps) => {

   const btnFunction = () => {
      return console.log('abrir modal referente ao botao clicado!')
  }
   
   return (
      <StyledCard>
         <div className="container__img-product">
            <figure>
               {announcement.photos ? <img src={announcement.photos[0].link} alt=""/> : <p>carregando...</p>}
            </figure>
            {announcement.higher_than_fipe ? null : <p className="icon-fipe"> $ </p>}
            {announcement.active ? <p className="icon-active"> Ativo </p> : <p className="icon-inactive"> Inativo</p>}
         </div>

         <div className="container__content-product">
            <h2> {announcement.brand} - {announcement.model} </h2>
            <p className="card-description">
               {announcement.description}
            </p>

            <div className="container__car-info">
               <div className="info">
                  <p> {announcement.km}KM </p>
                  <p> {announcement.year} </p>
             </div>

               <p className="price"> R$ {announcement.price} </p>
            </div>
         </div>
        <div className="container__btns-edif-info">
         <DefaultButton text="Editar" textcolor="--color-grey1" type="button" backgroundColor="--color-grey8" bordercolor="--color-grey1" buttonFunction={btnFunction}/>
         <DefaultButton text="Ver detalhes" textcolor="--color-grey1" type="button" backgroundColor="--color-grey8" bordercolor="--color-grey1" buttonFunction={btnFunction}/>
        </div>
      </StyledCard>
   );
};

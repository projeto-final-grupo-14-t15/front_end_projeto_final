import { IFilterResponse } from "../../interfaces/announcementsContext.types";
import { StyledCard } from "./style";

interface cardsProps {
  announcement: IFilterResponse;
}

export const ProductCardForUserPage = ({ announcement }: cardsProps) => {
  return (
    <StyledCard>
      <div className="container__img-product">
        <figure>
          {announcement.photos ? (
            <img src={announcement.photos[0].link.toString()} alt="" />
          ) : (
            <p>carregando...</p>
          )}
        </figure>
        {announcement.higher_than_fipe ? null : (
          <p className="icon-fipe"> $ </p>
        )}
        {announcement.isActive ? (
          <p className="icon-active"> Ativo </p>
        ) : (
          <p className="icon-inactive"> Inativo</p>
        )}
      </div>

      <div className="container__content-product">
        <h2>
          {" "}
          {announcement.brand} - {announcement.model}{" "}
        </h2>
        <p className="card-description">{announcement.description}</p>

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

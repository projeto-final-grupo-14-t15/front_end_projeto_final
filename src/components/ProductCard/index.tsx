import { useNavigate } from "react-router-dom";
import { IFilterResponse } from "../../interfaces/announcementsContext.types";
import { UserIcon } from "../UserIcon";
import { StyledCard } from "./style";

interface cardsProps {
  announcement: IFilterResponse;
}

export const ProductCard = ({ announcement }: cardsProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/announcement-page/announcement/${announcement.id}`);
  };

  return (
    <StyledCard>
      <div className="container__img-product" onClick={() => handleClick()}>
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
      </div>

      <div className="container__content-product">
        <h2 onClick={() => handleClick()}>
          {" "}
          {announcement.brand} - {announcement.model}{" "}
        </h2>
        <p className="card-description">{announcement.description}</p>

        <UserIcon user={announcement.user} clickable={"yes"} />

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

import { useState } from "react";
import { IFilterResponse } from "../../interfaces/announcementsContext.types";
import { DefaultButton } from "../DefaultButton";
import AnnouncementForm from "../Forms/AnnouncementForm";
import { StyledCard } from "./style";
import useAnnouncements from "../../hooks/useAnnouncements";
import { useNavigate } from "react-router-dom";

interface cardsProps {
   announcement:IFilterResponse;
}

export const ProductCardAnnoucer = ({announcement}:cardsProps) => {

   const navigate = useNavigate();

   const btnFunction = () => {
      return console.log('SUBSTITUIR PELA FUNÇÃO ADEQUADA')
  }

   const handleClick = () => {
      navigate(`/announcement-page/announcement/${announcement.id}`);
   };
  
  const { editAnnouncement } = useAnnouncements();
  const [openEditAnnouncementModal, setOpenEditAnnouncementModal] = useState(false);
   
   return (
      <StyledCard>
         <div className="container__img-product"  onClick={()=>handleClick()}>
            <figure>
               {announcement.photos ? <img src={announcement.photos[0].link} alt=""/> : <p>carregando...</p>}
            </figure>
            {announcement.higher_than_fipe ? null : <p className="icon-fipe"> $ </p>}
            {announcement.isActive ? <p className="icon-active"> Ativo </p> : <p className="icon-inactive"> Inativo</p>}
         </div>

         <div className="container__content-product">
            <h2 onClick={()=>handleClick()}> {announcement.brand} - {announcement.model} </h2>
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
        <AnnouncementForm
            isCreateForm={false}
            open={openEditAnnouncementModal}
            setOpen={setOpenEditAnnouncementModal}
            submitFunction={editAnnouncement}
            announcement={announcement}
          />
         <DefaultButton text="Ver detalhes" textcolor="--color-grey1" type="button" backgroundcolor="--color-grey8" bordercolor="--color-grey1" buttonFunction={btnFunction}/>
        </div>
      </StyledCard>
   );
};

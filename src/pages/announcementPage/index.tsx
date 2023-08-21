import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledAnnouncementPage } from "./style";
import { api } from "../../services/api";
import { LoadingPage } from "../loadingPage";
import { IAnnouncement } from "../../interfaces/announcementsContext.types";
import { DefaultButton } from "../../components/DefaultButton";
import { UserIcon } from "../../components/UserIcon";
import { LoginContext } from "../../context/LoginContext";
import { TextField } from "@mui/material";

export const AnnouncementPage = () => {
  const [announcement, setAnnouncement] = useState<IAnnouncement | undefined>(undefined);
  const { announcementId } = useParams();
  const { userInfo } = useContext(LoginContext);
  const [autoComment, setAutoComment] = useState<string|null>(null);

  const navigate = useNavigate();
  
  useEffect(() => {
    const currentAnnouncement = async () => {
      try {
        const res = await api.get(`announcements/${announcementId}`);
        const currentAnnouncement = res.data;
        console.log(res)
        setAnnouncement(currentAnnouncement);
      } catch (err) {
        console.log(err);
      }
    };
    currentAnnouncement();
  }, []);

  const btnFunction = () =>{
    console.log('função de comprar carro')
  }

  function capitalizeFirstLetter(inputString:string) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }
  function formatNumber(number:number|string) {
    const numStr = number.toString();
    const [integerPart, decimalPart = ""] = numStr.split(".");
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const formattedDecimalPart = decimalPart.padEnd(2, "0");
    const formattedNumber = `${formattedIntegerPart},${formattedDecimalPart}`;
    return formattedNumber;
  }
  const handleSpanClick = (comment:string) => {
    setAutoComment(comment);
  };

  const onClickNavigate = (userId:number) =>{
    navigate(`/announcer/${userId}`);
  } 

  return (
    <>
      {
      announcement ? (
        <StyledAnnouncementPage>
          <main>
            <section className="container__main-info">

              <div className="container-div container__cover-photo">
                <img src={announcement.photos[0].link} alt="" />
              </div>

              <div className="container-div container__car-info">
                <h2> {capitalizeFirstLetter(announcement.model)} </h2>

                <div className="car-info">
                  <div className="car-info-info">
                    <p className="detailed-info">{announcement.year}</p>
                    <p className="detailed-info">{announcement.km}Km</p>
                  </div>
                  <p>R${formatNumber(announcement.price)}</p>
                </div>

                <DefaultButton type="button" text="Comprar" backgroundcolor="--color-brand1" textcolor="--color-grey10" bordercolor="--color-brand1" buttonFunction={btnFunction} />
            
              </div>

              <div className="container-div container__description">
                <h2> Descrição </h2>
                <p> {announcement.description} </p>
              </div>

              <aside className="container__aside-mobile">
                <div className="container-div container__photos">
                  <h2> Fotos </h2>

                  <div className="photos-list">
                    {announcement.photos.map((photo, index) => (
                      <img key={index} src={photo.link} alt={`Photo ${index}`} />
                    ))}
                  </div>
                </div>

                <div className="container-div contaienr__user-info">
                  <span className="icon-initials"> SL </span>
                  <h2> Samuel Leão </h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                  <DefaultButton type="button" text="Ver todos anuncios" backgroundcolor="--color-grey0" textcolor="--color-grey10" bordercolor="--color-grey0" buttonFunction={()=>onClickNavigate(announcement.user.id)} />
                </div>

            </aside>

              <div className="container-div container__comments">
                <h2> Comentários </h2>
                <p> Aqui será feito um MAP com o campo announcement.comments que ainda não existe </p>
              </div>

              {
                userInfo
                ?
                <div className="container-div container__new-comment">
                  <UserIcon user={userInfo} clickable={'no'}/>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    placeholder="Comente aqui"
                    defaultValue={autoComment}
                    style={{ width: '100%' }}
                  />
                  <p> <span onClick={() => handleSpanClick("Gostei muito!")} >Gostei muito!</span> <span onClick={() => handleSpanClick("Incrível!")} >Incrível!</span> <span onClick={() => handleSpanClick("Recomendarei para meus amigos!")} > Recomendarei para meus amigos!</span> </p>
                </div>
                :
                <h2>
                  conecte-se para comentar
                </h2>
              }


            </section>

            <aside className="container__aside">
              <div className="container-div container__photos">
                <h2> Fotos </h2>
                <div className="photos-list">
                  {announcement.photos.map((photo, index) => (
                    <img key={index} src={photo.link} alt={`Photo ${index}`} />
                  ))}
                </div>
              </div>
              <div className="container-div contaienr__user-info">
                <span className="icon-initials"> SL </span>
                <h2> Samuel Leão </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                <DefaultButton type="button" text="Ver todos anuncios" backgroundcolor="--color-grey0" textcolor="--color-grey10" bordercolor="--color-grey0" buttonFunction={()=>onClickNavigate(announcement.user.id)} />

              </div>
            </aside>

          </main>
        </StyledAnnouncementPage>
      ) : (
        <LoadingPage/>
      )}
    </>
  );
};
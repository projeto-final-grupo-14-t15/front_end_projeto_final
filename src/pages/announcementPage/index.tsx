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
import { CommentCard } from "../../components/CommentCard";
import PhotoModal from "../../components/PhotoModal";
import {
  capitalizeFirstLetter,
  formatNumber,
  getInitials,
  handleClickWhatsApp,
} from "./utils";
import { CommentsContext } from "../../context/CommentsContext/CommentsContext";
import { ModalCommentEdit } from "../../components/ModalEditComment";
import { ModalCommentDelete } from "../../components/ModalDeleteComment";

export const AnnouncementPage = () => {
  const [announcement, setAnnouncement] = useState<IAnnouncement | undefined>(
    undefined
  );
  const { announcementId } = useParams();
  const { userInfo } = useContext(LoginContext);
  const [autoComment, setAutoComment] = useState<string | null>(null);
  const [openPhotoModal, setOpenPhotoModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const { comments, getAllCommentsOfAnnoucement, registerNewComment } =
    useContext(CommentsContext);

  const navigate = useNavigate();

  useEffect(() => {
    const currentAnnouncement = async () => {
      try {
        const res = await api.get(`announcements/${announcementId}`);
        const currentAnnouncement = res.data;

        setAnnouncement(currentAnnouncement);
      } catch (err) {
        console.log(err);
      }
    };
    currentAnnouncement();
  }, []);

  useEffect(() => {
    getAllCommentsOfAnnoucement(announcementId);
  }, []);

  const handleSpanClick = (comment: string) => {
    setAutoComment(comment);
  };

  const onClickNavigate = (userId: number) => {
    navigate(`/announcer/${userId}`);
  };

  const [textComment, setTextComment] = useState("");

  const handleSubmitNewComment = (event: any) => {
    event.preventDefault();
    if (textComment.trim().length !== 0) {
      registerNewComment(textComment, announcementId);
    }
  };

  const handleOpenEdit = () => {
    setModal(!modal);
  };

  const handleOpenDelete = () => {
    setModalDelete(!modalDelete);
  };

  return (
    <>
      {announcement ? (
        <StyledAnnouncementPage>
          <main>
            <section className="container__main-info">
              <div className="container-div container__cover-photo">

             { 
                typeof announcement!.photos[0].link == 'string'
                ?
               <img src={announcement!.photos[0].link} alt="" />
               :
               null
             }
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

                <DefaultButton
                  type="button"
                  text="Comprar"
                  backgroundcolor="--color-brand1"
                  textcolor="--color-grey10"
                  bordercolor="--color-brand1"
                  buttonFunction={() =>
                    handleClickWhatsApp(announcement?.model, announcement?.year, announcement.user.telephone)
                  }
                />
              </div>

              <div className="container-div container__description">
                <h2> Descrição </h2>
                <p> {announcement.description} </p>
              </div>

              <aside className="container__aside-mobile">
                {announcement.photos.length > 1 ? (
                  <div className="container-div container__photos">
                    <h2> Fotos </h2>
                    <div className="photos-list">
                      {announcement.photos.map((photo, index) => (
                        <PhotoModal
                          index={index}
                          photo={photo}
                          open={openPhotoModal}
                          setOpen={setOpenPhotoModal}
                          announcement={announcement}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="container-div contaienr__user-info">
                  <span className="icon-initials">
                    {getInitials(announcement.user.name)}{" "}
                  </span>
                  <h2> {announcement.user.name} </h2>
                  <p>
                    {announcement.user.description}
                  </p>
                  <DefaultButton
                    type="button"
                    text="Ver todos anuncios"
                    backgroundcolor="--color-grey0"
                    textcolor="--color-grey10"
                    bordercolor="--color-grey0"
                    buttonFunction={() => onClickNavigate(announcement.user.id)}
                  />
                </div>
              </aside>

              <div className="container-div container__comments">
                <h2> Comentários </h2>
                <ul className="comments-list">
                  {comments.map((comment) => (
                    <CommentCard
                      key={Math.floor(Math.random() * 1000000)}
                      comment={comment}
                      handleOpenEdit={handleOpenEdit}
                      handleOpenDelete={handleOpenDelete}
                    />
                  ))}
                </ul>
              </div>

              {userInfo ? (
                <div className="container-div container__new-comment">
                  <UserIcon user={userInfo} clickable={"no"} />
                  <div className="container__form-comment">
                    <form
                      action=""
                      onSubmit={(event) => handleSubmitNewComment(event)}
                    >
                      <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Comente aqui"
                        defaultValue={autoComment}
                        onChange={(e) => setTextComment(e.target.value)}
                        style={{ width: "100%" }}
                      />
                      <DefaultButton
                        text="Comentar"
                        backgroundcolor="--color-brand1"
                        bordercolor="--color-brand1"
                        type="submit"
                        textcolor="--color-grey10"
                        buttonFunction={()=>null}
                      />
                    </form>
                  </div>
                  <p>
                    {" "}
                    <span onClick={() => handleSpanClick("Gostei muito!")}>
                      Gostei muito!
                    </span>{" "}
                    <span onClick={() => handleSpanClick("Incrível!")}>
                      Incrível!
                    </span>{" "}
                    <span
                      onClick={() =>
                        handleSpanClick("Recomendarei para meus amigos!")
                      }
                    >
                      {" "}
                      Recomendarei para meus amigos!
                    </span>{" "}
                  </p>
                </div>
              ) : (
                <h2>Conecte-se para comentar</h2>
              )}
              <ModalCommentEdit modal={modal} setModal={setModal} />
              <ModalCommentDelete
                modalDelete={modalDelete}
                setModalDelete={setModalDelete}
              />
            </section>

            <aside className="container__aside">
              {announcement.photos.length > 1 ? (
                <div className="container-div container__photos">
                  <h2> Fotos </h2>
                  <div className="photos-list">
                    {announcement.photos.map((photo, index) => (
                      <PhotoModal
                        index={index}
                        photo={photo}
                        open={openPhotoModal}
                        setOpen={setOpenPhotoModal}
                        announcement={announcement}
                      />
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="container-div contaienr__user-info">
                <span className="icon-initials">
                  {" "}
                  {getInitials(announcement.user.name)}{" "}
                </span>
                <h2> {announcement.user.name}</h2>
                <p>
                  {announcement.user.description}
                </p>
                <DefaultButton
                  type="button"
                  text="Ver todos anuncios"
                  backgroundcolor="--color-grey0"
                  textcolor="--color-grey10"
                  bordercolor="--color-grey0"
                  buttonFunction={() => onClickNavigate(announcement.user.id)}
                />
              </div>
            </aside>
          </main>
        </StyledAnnouncementPage>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

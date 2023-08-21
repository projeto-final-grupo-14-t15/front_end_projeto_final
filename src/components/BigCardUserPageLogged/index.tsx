import { useEffect, useState } from "react";
import { StyledCardUser } from "./style";
import { api } from "../../services/api";
import AnnouncementForm from "../Forms/AnnouncementForm";
import useAnnouncements from "../../hooks/useAnnouncements";

interface ICardUserProps {
  userId: undefined | string;
}

export const BigCardUserLogged = ({ userId }: ICardUserProps) => {
  const [userAnnouncer, setUserAnnouncer] = useState<IUser | null>(null);

  useEffect(() => {
    const getUserInfo = async (userId: string | undefined) => {
      try {
        const response = await api.get(`/users/${userId}/`);
        setUserAnnouncer(response.data);
      } catch (error) {
        console.log("ERRO AO OBTER INFORMAÇÕES DESSE USER");
      }
    };
    getUserInfo(userId);
  }, []);

  function getInitials(name: string) {
    const words = name.split(" ");
    let initials = "";

    for (const word of words) {
      if (word.length > 0) {
        initials += word[0].toUpperCase();
      }
    }

    return initials.slice(0, 2);
  }

    const { createAnnouncement } = useAnnouncements();
    const [openAnnouncementModal, setOpenAnnouncementModal] = useState(false);

  return (
    <StyledCardUser>
      {userAnnouncer ? (
        <>
          <div className="icon-initials">
            {" "}
            {getInitials(userAnnouncer.name)}{" "}
          </div>
          <p>
            {" "}
            <strong className="text-user-name">
              {" "}
              {userAnnouncer.name}{" "}
            </strong>{" "}
            <span className="tag-announcer"> Anunciante </span>{" "}
          </p>
          <p className="text-user-description"> {userAnnouncer.description} </p>

          <AnnouncementForm
            isCreateForm={true}
            open={openAnnouncementModal}
            setOpen={setOpenAnnouncementModal}
            submitFunction={createAnnouncement}
          />
        </>
      ) : (
        <p> carregando... </p>
      )}
    </StyledCardUser>
  );
};

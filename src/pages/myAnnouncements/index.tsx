import { useEffect, useState } from "react";
import useAnnouncements from "../../hooks/useAnnouncements";
import { StyledAnnoucerPage } from "./style";
import { useParams } from "react-router-dom";
import { ProductCardAnnoucer } from "../../components/ProductCardOwner";
import { BigCardUserLogged } from "../../components/BigCardUserPageLogged";
import { ThemeH2 } from "../../styles/Typography";
import Pagination from "../../components/Pagination";

export const MyAnnouncementsPage = () => {
  const {
    allUserAnnouncements,
    getAnnouncementsByUserId,
    annoncementsChanged,
  } = useAnnouncements();

  const { userId } = useParams();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAnnouncementsByUserId(Number(userId));
  }, []);

  useEffect(() => {
    getAnnouncementsByUserId(Number(userId));
    setCurrentPage(1);
  }, [annoncementsChanged]);

  const announcementsPerPage = 8;
  const indexOfLastUser = currentPage * announcementsPerPage;
  const indexOfFirstUser = indexOfLastUser - announcementsPerPage;
  const currentAnnouncements = allUserAnnouncements.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const maxPages = Math.ceil(allUserAnnouncements.length / 9);

  return (
    <StyledAnnoucerPage>
      <section>
        <div className="container_header-user-info"></div>

        <div className="container_user-info">
          <BigCardUserLogged userId={userId} />
        </div>
      </section>

      <section className="container_announces" id="announcements-list">
        <h2 className="title-announces"> Anúncios </h2>
        {allUserAnnouncements.length === 0 ? (
          <div className="alert">
            <ThemeH2>Ainda não cadastrou nenhum anuncio!</ThemeH2>
          </div>
        ) : (
          <ul>
            {currentAnnouncements.map((announcement) => (
              <ProductCardAnnoucer
                key={announcement.id}
                announcement={announcement}
              />
            ))}
          </ul>
        )}
        <Pagination
          currentPage={currentPage}
          maxPages={maxPages}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </StyledAnnoucerPage>
  );
};

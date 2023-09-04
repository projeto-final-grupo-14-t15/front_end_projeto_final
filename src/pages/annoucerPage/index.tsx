import { useEffect, useState } from "react";
import useAnnouncements from "../../hooks/useAnnouncements";
import { StyledAnnoucerPage } from "./style";
import { useParams } from "react-router-dom";
import { ProductCardForUserPage } from "../../components/ProductCardForAnnouncerPage";
import { BigCardUser } from "../../components/BigCardUserPage";
import { ThemeH2 } from "../../styles/Typography";
import Pagination from "../../components/Pagination";

export const AnnoucerPage = () => {
  const { allUserAnnouncements, getAnnouncementsByUserId } = useAnnouncements();

  const { userId } = useParams();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAnnouncementsByUserId(Number(userId));
  }, []); 

  
  const announcementsPerPage = 9;
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
          <div className="container_header-user-info">

          </div>
          
          <div className="container_user-info">
              <BigCardUser userId={userId}/>
          </div>
        </section>
        
        
        <section className="container_announces">        
          <h2 className="title-announces"> Anúncios </h2>
          {allUserAnnouncements.length===0?(<div className="alert"><ThemeH2>Nenhum anuncio para este vendedor!</ThemeH2></div>):(<ul>
            {currentAnnouncements.map((announcement) => (
              <ProductCardForUserPage key={announcement.id} announcement={announcement} />
            ))}
          </ul>)}
          <Pagination currentPage={currentPage} maxPages={maxPages} setCurrentPage={setCurrentPage}/>
        </section>
    </StyledAnnoucerPage>
  );
};

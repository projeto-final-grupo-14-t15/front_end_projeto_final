import { useEffect } from "react";
import useAnnouncements from "../../hooks/useAnnouncements";
import { StyledAnnoucerPage } from "./style";
import { useParams } from "react-router-dom";
import { BigCardUser } from "../../components/BigCardUserPage";
import { ProductCardAnnoucer } from "../../components/ProductCardOwner";

export const MyAnnouncementsPage = () => {
  const { allUserAnnouncements, getAnnouncementsByUserId } = useAnnouncements();

  const { userId } = useParams();

  useEffect(() => {
    getAnnouncementsByUserId(Number(userId));
  }, []); 
  
  return (
    
    <StyledAnnoucerPage>
        <section>
          <div className="container_header-user-info">

          </div>
          
          <div className="container_user-info">
              <BigCardUser/>
          </div>
        </section>
        
         
        <section className="container_announces">        
          <h2 className="title-announces"> Anúncios </h2>
          <ul>
            {allUserAnnouncements.map((announcement) => (
              <ProductCardAnnoucer key={announcement.id} announcement={announcement} />
            ))}
          </ul>
        </section>
    </StyledAnnoucerPage>
  );
};

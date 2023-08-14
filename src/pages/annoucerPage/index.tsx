import { useEffect } from "react";
import useAnnouncements from "../../hooks/useAnnouncements";
import { StyledAnnoucerPage } from "./style";
import { useParams } from "react-router-dom";
import { ProductCardForUserPage } from "../../components/ProductCardForAnnouncerPage";
import { BigCardUser } from "../../components/BigCardUserPage";

export const AnnoucerPage = () => {
  const { allUserAnnouncements, getAnnouncementsByUserId } = useAnnouncements();

  const { userId } = useParams();

  console.log(userId)

  
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
          <h2> Anúncios </h2>
          <ul>
            {allUserAnnouncements.map((announcement) => (
              <ProductCardForUserPage key={announcement.id} announcement={announcement} />
            ))}
          </ul>
        </section>
    </StyledAnnoucerPage>
  );
};

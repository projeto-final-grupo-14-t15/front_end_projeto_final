import { useEffect } from "react";
import useAnnouncements from "../../hooks/useAnnouncements";
import { StyledAnnoucerPage } from "./style";
import { useParams } from "react-router-dom";
import { ProductCardForUserPage } from "../../components/ProductCardForAnnouncerPage";
import { BigCardUser } from "../../components/BigCardUserPage";
import { ThemeH2 } from "../../styles/Typography";

export const AnnoucerPage = () => {
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
              <BigCardUser userId={userId}/>
          </div>
        </section>
        
        
        <section className="container_announces">        
          <h2 className="title-announces"> Anúncios </h2>
          {allUserAnnouncements.length===0?(<div className="alert"><ThemeH2>Nenhum anuncio para este vendedor!</ThemeH2></div>):(<ul>
            {allUserAnnouncements.map((announcement) => (
              <ProductCardForUserPage key={announcement.id} announcement={announcement} />
            ))}
          </ul>)}
        </section>
    </StyledAnnoucerPage>
  );
};

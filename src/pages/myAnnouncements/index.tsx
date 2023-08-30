import { useEffect } from "react";
import useAnnouncements from "../../hooks/useAnnouncements";
import { StyledAnnoucerPage } from "./style";
import { useParams } from "react-router-dom";
import { ProductCardAnnoucer } from "../../components/ProductCardOwner";
import { BigCardUserLogged } from "../../components/BigCardUserPageLogged";
import { ThemeH2 } from "../../styles/Typography";

export const MyAnnouncementsPage = () => {
  const { allUserAnnouncements, getAnnouncementsByUserId, annoncementsChanged } = useAnnouncements();

  const { userId } = useParams();

  useEffect(() => {
    getAnnouncementsByUserId(Number(userId));
  }, []); 

  useEffect(() => {
    getAnnouncementsByUserId(Number(userId));
  }, [annoncementsChanged]); 
  
  return (
    
    <StyledAnnoucerPage>
        <section>
          <div className="container_header-user-info">

          </div>
          
          <div className="container_user-info">
              <BigCardUserLogged userId={userId}/>
          </div>
        </section>
        
        
        <section className="container_announces">        
          <h2 className="title-announces"> Anúncios </h2>
          {allUserAnnouncements.length===0?(<div className="alert"><ThemeH2>Ainda não cadastrou nenhum anuncio!</ThemeH2></div>):(<ul>
            {allUserAnnouncements.map((announcement) => (
              <ProductCardAnnoucer key={announcement.id} announcement={announcement} />
            ))}
          </ul>)}
        </section>
    </StyledAnnoucerPage>
  );
};

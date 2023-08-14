import { useEffect } from "react";
import useAnnouncements from "../../hooks/useAnnouncements";
import { StyledAnnoucerPage } from "./style";
import { useParams } from "react-router-dom";
import { ProductCardOwner } from "../../components/ProductCardOwner";

export const AnnoucerPage = () => {
  const { allUserAnnouncements, getAnnouncementsByUserId } = useAnnouncements();

  const { userId } = useParams();
  
  useEffect(() => {
    getAnnouncementsByUserId(Number(userId));
  }, []); 
  
  return (
    
    <StyledAnnoucerPage>
          <section>        
            <ul>
              {allUserAnnouncements.map((announcement) => (
                <ProductCardOwner key={announcement.id} announcement={announcement} />
              ))}
            </ul>
          </section>
      </StyledAnnoucerPage>
  );
};

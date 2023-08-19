import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledAnnouncementPage } from "./style";
import { api } from "../../services/api";
import { LoadingPage } from "../loadingPage";
import { IAnnouncement } from "../../interfaces/announcementsContext.types";

export const AnnouncementPage = () => {
  
  const [announcement, setAnnouncement] = useState<IAnnouncement | undefined>(undefined);
  const { announcementId } = useParams();

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

  return (
    <>
      {
      announcement ? (
        <StyledAnnouncementPage>
          <p> {announcement.color} </p>
          <img src={announcement.photos[0].link} alt="" />
        </StyledAnnouncementPage>
      ) : (
        <LoadingPage/>
      )}
    </>
  );
};
import { useState } from "react";
import AnnouncementForm from "../../components/Forms/AnnouncementForm";
import useAnnouncements from "../../hooks/useAnnouncements";

export const Home = () => {
  const { createAnnouncement } = useAnnouncements();

  const [openAnnouncementModal, setOpenAnnouncementModal] = useState(false);

  return (
    <main>
      <h1>HOME</h1>
      <AnnouncementForm
        isCreateForm={true}
        open={openAnnouncementModal}
        setOpen={setOpenAnnouncementModal}
        submitFunction={createAnnouncement}
      />
    </main>
  );
};

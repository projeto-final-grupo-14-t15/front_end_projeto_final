import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { Filter } from "../../components/Filter";
import useAnnouncements from "../../hooks/useAnnouncements";
import AnnouncementForm from "../../components/Forms/AnnouncementForm";

export const Home = () => {
  const { Announcements, getAnnouncements } = useAnnouncements();

  const dataTeste = {
    brand: "",
    model: "",
    year: "",
    fuel: "",
    color: "",
    minPrice: "",
    maxPrice: "",
    minKm: "",
    maxKm: "",
  };

  useEffect(() => {
    getAnnouncements(dataTeste);
  }, []);

  const { createAnnouncement } = useAnnouncements();
  const [openAnnouncementModal, setOpenAnnouncementModal] = useState(false);

  return (
    <main>
      <AnnouncementForm
        isCreateForm={true}
        open={openAnnouncementModal}
        setOpen={setOpenAnnouncementModal}
        submitFunction={createAnnouncement}
      />
      ;
      <Filter />
      <ul>
        {Announcements.map((announcement) => (
          <ProductCard key={announcement.id} announcement={announcement} />
        ))}
      </ul>
    </main>
  );
};

import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import { ProductCard } from "../../components/ProductCard";
import AnnouncementForm from "../../components/Forms/AnnouncementForm";
import useAnnouncements from "../../hooks/useAnnouncements";

export const Home = () => {
    const { createAnnouncement } = useAnnouncements();
    const [openAnnouncementModal, setOpenAnnouncementModal] = useState(false);

   const { Announcements, getAnnouncements } = useContext(FilterContext);
   
      const dataTeste = {
      brand: "",
      model: "",
      year: "",
      fuel: "",
      color: "",
      minPrice: "",
      maxPrice: "",
      minKm:"",
      maxKm:"",
   }

   useEffect(() => {
      getAnnouncements(dataTeste);
   }, []);

   return (
      <main>
         <ul>
            {Announcements.map((announcement) => (
               <ProductCard key={announcement.id} announcement={announcement} />
            ))}
         </ul>
         <AnnouncementForm
        isCreateForm={true}
        open={openAnnouncementModal}
        setOpen={setOpenAnnouncementModal}
        submitFunction={createAnnouncement}
      />
      </main>
)
}


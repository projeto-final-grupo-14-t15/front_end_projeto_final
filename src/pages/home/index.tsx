import { useContext, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { Filter } from "../../components/Filter";
import { AnnouncementsContext } from "../../context/AnnouncementsContext";

export const Home = () => {
    

   const { Announcements, getAnnouncements } = useContext(AnnouncementsContext);
   
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
         <Filter/>
         <ul>
            {Announcements.map((announcement) => (
               <ProductCard key={announcement.id} announcement={announcement} />
            ))}
         </ul>
         
      </main>
)
}


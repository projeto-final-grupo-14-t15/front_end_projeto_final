import { useContext, useEffect } from "react";
import { FilterContext } from "../../context/FilterContext";
import { ProductCard } from "../../components/ProductCard";
import { Filter } from "../../components/Filter";

export const Home = () => {

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
         <Filter/>
         <ul>
            {Announcements.map((announcement) => (
               <ProductCard key={announcement.id} announcement={announcement} />
            ))}
         </ul>
      </main>
)
}
import { useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { Filter } from "../../components/Filter";
import useAnnouncements from "../../hooks/useAnnouncements";
import HomeHeader from "../../components/homeHeader/HomeHeader";

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

  return (
    <main>
      <HomeHeader/>
      <Filter />
      <ul>
        {Announcements.map((announcement) => (
          <ProductCard key={announcement.id} announcement={announcement} />
        ))}
      </ul>
    </main>
  );
};

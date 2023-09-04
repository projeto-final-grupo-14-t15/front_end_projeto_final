import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { Filter } from "../../components/Filter";
import useAnnouncements from "../../hooks/useAnnouncements";
import HomeHeader from "../../components/homeHeader/HomeHeader";
import Pagination from "../../components/Pagination";
import StyledHome from "./style";

export const Home = () => {
  const { Announcements, getAnnouncements } = useAnnouncements();
  
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 9;

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

  const indexOfLastUser = currentPage * announcementsPerPage;
  const indexOfFirstUser = indexOfLastUser - announcementsPerPage;
  const currentAnnouncements = Announcements.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const maxPages = Math.ceil(Announcements.length / 9);

  return (
    <StyledHome>
      <HomeHeader />
      <section id="announcements-list">
        <Filter setCurrentPage={setCurrentPage} />
        <ul >
          {currentAnnouncements.map((announcement) => (
            <ProductCard key={announcement.id} announcement={announcement} />
          ))}
          {currentAnnouncements.length == 0 && <h2>Não encontramos nenhum anuncio com os filtros escolhidos</h2>}
        </ul>
      </section>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} maxPages={maxPages}></Pagination>
    </StyledHome>
  );
};

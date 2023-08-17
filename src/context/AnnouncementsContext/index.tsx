import { createContext, useState } from "react";
import { api } from "../../services/api";
import { IAnnouncementsContext, IAnnouncementsForm, IAnnouncementsProviderProps, IFilterData, IFilterResponse } from "../../interfaces/announcementsContext.types";
import { AxiosResponse } from "axios";

export const AnnouncementsContext = createContext<IAnnouncementsContext>(
  {} as IAnnouncementsContext
);

const AnnouncementsProvider = ({ children }: IAnnouncementsProviderProps) => {
  const [Announcements, SetAnnouncements] = useState<IFilterResponse[]>([]);
  const [allAnnouncementsForFilter, SetAllAnnouncementsForFilter] = useState<
    IFilterResponse[]
  >([]);

  const createAnnouncement = async (
    dataAnnouncement
  ): Promise<void> => {
    console.log(dataAnnouncement);
    dataAnnouncement.photos = dataAnnouncement.photos.map(photo => photo.link);
    dataAnnouncement.price = Number(dataAnnouncement.price)
    dataAnnouncement.km = Number(dataAnnouncement.km)
    console.log(dataAnnouncement);

    // setLoading(true);
    const developmentToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyMjgxMDI0LCJleHAiOjE2OTIzNjc0MjQsInN1YiI6IjEifQ.6t4CYEIAimH9V7LqchgEDrvsizbvvWdE88wK7wyXSkY";

    try {
      const response = await api.post("/announcements", dataAnnouncement, {
        headers: {
          Authorization: `Bearer ${developmentToken}`,
        },
      });
      // toast.success('Veículo anunciado com sucesso!');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      // toast.error('Falha ao cadastrar casa');
    } finally {
      // setLoading(false);
    }
  };

  const getAnnouncements = async (data: IFilterData) => {
    const {
      brand,
      color,
      fuel,
      maxKm,
      model,
      maxPrice,
      minKm,
      minPrice,
      year,
    } = data;

    try {
      const response: AxiosResponse<IFilterResponse[]> = await api.get(
        `announcements?brand=${brand}&model=${model}&color=${color}&year=${year}&minKm=${minKm}&max
            Km=${maxKm}&minPrice=${minPrice}&maxPrice=${maxPrice}&fuel=${fuel}`
      );
      console.log(response.data);

      SetAnnouncements(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllAnnouncementsForFilter = async (data: IFilterData) => {
    const {
      brand,
      color,
      fuel,
      maxKm,
      model,
      maxPrice,
      minKm,
      minPrice,
      year,
    } = data;

    try {
      const response: AxiosResponse<IFilterResponse[]> = await api.get(
        `announcements?brand=${brand}&model=${model}&color=${color}&year=${year}&minKm=${minKm}&max
            Km=${maxKm}&minPrice=${minPrice}&maxPrice=${maxPrice}&fuel=${fuel}`
      );
      console.log(response.data);

      SetAllAnnouncementsForFilter(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AnnouncementsContext.Provider
      value={{
        createAnnouncement,
        getAnnouncements,
        getAllAnnouncementsForFilter,
        allAnnouncementsForFilter,
        Announcements
      }}
    >
      {children}
    </AnnouncementsContext.Provider>
  );
};

export { AnnouncementsProvider };

import { createContext, useState } from "react";
import { api } from "../../services/api";
import {
  IAnnouncementsContext,
  IAnnouncementsForm,
  IAnnouncementsProviderProps,
  IFilterData,
  IFilterResponse,
} from "../../interfaces/announcementsContext.types";
import { AxiosResponse } from "axios";

export const AnnouncementsContext = createContext<IAnnouncementsContext>(
  {} as IAnnouncementsContext
);

const AnnouncementsProvider = ({ children }: IAnnouncementsProviderProps) => {
  const [Announcements, SetAnnouncements] = useState<IFilterResponse[]>([]);
  const [allUserAnnouncements, setAllUserAnnouncements] = useState<any>([]);

  const createAnnouncement = async (dataAnnouncement): Promise<void> => {
    console.log(dataAnnouncement);
    dataAnnouncement.photos = dataAnnouncement.photos.map(
      (photo) => photo.link
    );
    dataAnnouncement.price = Number(dataAnnouncement.price);
    dataAnnouncement.km = Number(dataAnnouncement.km);
    dataAnnouncement.higherThanFipe = true
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const response = await api.post("/announcements", dataAnnouncement, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // toast.success('Veículo anunciado com sucesso!');
        console.log(response.data, 'anuncio postado');
      } catch (error) {
        console.error(error);
        // toast.error('Falha ao cadastrar casa');
      } finally {
        // setLoading(false);
      }
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

  const getAnnouncementsByUserId = async (userId: number) => {
    try {
      const response: AxiosResponse<any> = await api.get(
        `/announcements/byannouncer/${userId}`
      );
      console.log(response);
      setAllUserAnnouncements(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AnnouncementsContext.Provider
      value={{
        createAnnouncement,
        getAnnouncements,
        Announcements,
        allUserAnnouncements,
        getAnnouncementsByUserId,
      }}
    >
      {children}
    </AnnouncementsContext.Provider>
  );
};

export { AnnouncementsProvider };

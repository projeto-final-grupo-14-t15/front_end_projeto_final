import { createContext, useState } from "react";
import { api } from "../../services/api";
import {
  IAnnouncementRequestData,
  IAnnouncementsContext,
  IAnnouncementsForm,
  IAnnouncementsProviderProps,
  IFilterData,
  IFilterResponse,
} from "../../interfaces/announcementsContext.types";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const AnnouncementsContext = createContext<IAnnouncementsContext>(
  {} as IAnnouncementsContext
);

const AnnouncementsProvider = ({ children }: IAnnouncementsProviderProps) => {
  const [Announcements, SetAnnouncements] = useState<IFilterResponse[]>([]);
  const [allUserAnnouncements, setAllUserAnnouncements] = useState<
    IFilterResponse[]
  >([]);
  const [annoncementsChanged, setAnnoncementsChanged] = useState<number>(0);

  const createAnnouncement = async (
    dataAnnouncement: IAnnouncementsForm
  ): Promise<void> => {
    if (dataAnnouncement.fipePrice) {
      const traitAnnouncementData: IAnnouncementRequestData = {
        ...dataAnnouncement,
        photos: dataAnnouncement.photos.map((photo) => photo.link),
        fipePrice: dataAnnouncement.fipePrice?.toString(),
        price: Number(dataAnnouncement.price),
        km: Number(dataAnnouncement.km),
      };
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        try {
          await api.post("/announcements", traitAnnouncementData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          toast.success("Veículo anunciado com sucesso!");
        } catch (error) {
          console.error(error);
          toast.error("Falha ao anunciar veículo");
        } finally {
          setAnnoncementsChanged(annoncementsChanged + 1);
        }
      }
    }
  };

  const editAnnouncement = async (
    dataAnnouncement: IAnnouncementsForm,
    announcementId?: number
  ): Promise<void> => {
    if (dataAnnouncement.fipePrice) {
      const traitAnnouncementData: IAnnouncementRequestData = {
        ...dataAnnouncement,
        photos: dataAnnouncement.photos.map((photo) => photo.link),
        fipePrice: dataAnnouncement.fipePrice?.toString(),
        price: Number(dataAnnouncement.price),
        km: Number(dataAnnouncement.km),
      };
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        try {
          await api.patch(
            `/announcements/${announcementId}`,
            traitAnnouncementData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          toast.success("Dados do veículo atualizados com sucesso!");
        } catch (error) {
          console.error(error);
          toast.error("Falha ao atualizar dados do veículo");
        } finally {
          setAnnoncementsChanged(annoncementsChanged + 1);
        }
      }
    }
  };

  const deleteAnnouncement = async (announcementId: number): Promise<void> => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        await api.delete(`/announcements/${announcementId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.warning("Anúncio excluído com sucesso!");
      } catch (error) {
        console.error(error);
        toast.error("Falha ao excluir anúncio");
      } finally {
        setAnnoncementsChanged(annoncementsChanged + 1);
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

      SetAnnouncements(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getAnnouncementsByUserId = async (userId: number) => {
    try {
      const response: AxiosResponse<IFilterResponse[]> = await api.get(
        `/announcements/byannouncer/${userId}`
      );
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
        editAnnouncement,
        deleteAnnouncement,
        annoncementsChanged,
      }}
    >
      {children}
    </AnnouncementsContext.Provider>
  );
};

export { AnnouncementsProvider };

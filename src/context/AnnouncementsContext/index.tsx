import { createContext, useState } from "react";
import { api } from "../../services/api";
import { IAnnouncementsContext, IAnnouncementsForm, IAnnouncementsProviderProps, IFilterData, IFilterResponse } from '../../interfaces/announcementsContext.types';
import { AxiosResponse } from "axios";

export const AnnouncementsContext = createContext<IAnnouncementsContext>(
  {} as IAnnouncementsContext
);

const AnnouncementsProvider = ({ children }: IAnnouncementsProviderProps) => {

  const [Announcements,SetAnnouncements] = useState<IFilterResponse[]>([])

  
  const createAnnouncement = async (
    dataAnnouncement: IAnnouncementsForm
  ): Promise<void> => {
    console.log(dataAnnouncement);

    // setLoading(true);
    const developmentToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkxNjI5NjQ2LCJleHAiOjE2OTE3MTYwNDYsInN1YiI6IjEifQ.CUqdOrGbveJTFxo6NM0JZ_JwixVG12-xqn9SVyJDSQU";

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

    const {brand,color,fuel,maxKm,model,maxPrice,minKm,minPrice,year} = data;

    try {

       const response: AxiosResponse<IFilterResponse[]> = await api.get(
          `announcements?brand=${brand}&model=${model}&color=${color}&year=${year}&minKm=${minKm}&max
          Km=${maxKm}&minPrice=${minPrice}&maxPrice=${maxPrice}&fuel=${fuel}`
       );
       console.log(response.data)

       SetAnnouncements(response.data)
 
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
      }}
    >
      {children}
    </AnnouncementsContext.Provider>
  );
};

export { AnnouncementsProvider };

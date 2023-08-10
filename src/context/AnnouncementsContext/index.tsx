import { createContext } from "react";
import {
  IAnnouncementsContext,
  IAnnouncementsForm,
  IAnnouncementsProviderProps,
} from "./types";
import { api } from "../../services/api";

export const AnnouncementsContext = createContext<IAnnouncementsContext>(
  {} as IAnnouncementsContext
);

const AnnouncementsProvider = ({ children }: IAnnouncementsProviderProps) => {
  
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

  return (
    <AnnouncementsContext.Provider
      value={{
        createAnnouncement,
      }}
    >
      {children}
    </AnnouncementsContext.Provider>
  );
};

export { AnnouncementsProvider };

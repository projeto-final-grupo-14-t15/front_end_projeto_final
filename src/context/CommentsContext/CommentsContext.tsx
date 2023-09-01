import { createContext, useState } from "react";
import { IChildrenProps } from "../../types/@types";
import { ICommentsContext } from "../../interfaces/KenzieKarsContext.types";
import { api } from "../../services/api";

export const CommentsContext = createContext({} as ICommentsContext);

export default function CommentsProvider({ children }: IChildrenProps) {
  const [comments, setComments] = useState([]);

  const registerNewComment = async (dataComment:string,announcementeId:any): Promise<void> => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const response = await api.post(`/announcements/${announcementeId}/comment`,{ text: dataComment}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response)
        const newComment = response.data;
        setComments([...comments, newComment]);
      } catch (error) {
        console.error(error);
      }
    }
  };


  const getAllCommentsOfAnnoucement = async (announcementId: string | null | undefined) => {
    try {
      const response = await api.get(
        `/announcements/${announcementId}/comment`
      );
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CommentsContext.Provider
      value={{
        comments,
        getAllCommentsOfAnnoucement,
        registerNewComment
        
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

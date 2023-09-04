import { createContext, useState } from "react";
import { IChildrenProps } from "../../types/@types";
import { ICommentsContext } from "../../interfaces/KenzieKarsContext.types";
import { api } from "../../services/api";

export const CommentsContext = createContext({} as ICommentsContext);

export default function CommentsProvider({ children }: IChildrenProps) {
  const [comments, setComments] = useState([]);
  const token: string | null = localStorage.getItem("@TOKEN");
  const [comment, setComment] = useState([]);
  const [commentId, setCommentId] = useState<number | null>(null);

  const registerNewComment = async (
    dataComment: string,
    announcementeId: any
  ): Promise<void> => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const response = await api.post(
          `/announcements/${announcementeId}/comment`,
          { text: dataComment },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        const newComment = response.data;
        setComments([...comments, newComment]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getCommentToEdit = async (commentId: number): Promise<void> => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const response = await api.get(`/announcements/comment/${commentId}`);

        const newComment = response.data;

        setComment(newComment);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getAllCommentsOfAnnoucement = async (
    announcementId: string | null | undefined
  ) => {
    try {
      const response = await api.get(
        `/announcements/${announcementId}/comment`
      );
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateComment = async (dataComment: string) => {
    try {
      const response = await api.patch(
        `/announcements/comment/${commentId}`,
        { text: dataComment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setComment(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteComment = async () => {
    try {
      await api.delete(`/announcements/comment/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CommentsContext.Provider
      value={{
        comments,
        getAllCommentsOfAnnoucement,
        registerNewComment,
        getCommentToEdit,
        comment,
        updateComment,
        setCommentId,
        commentId,
        deleteComment,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

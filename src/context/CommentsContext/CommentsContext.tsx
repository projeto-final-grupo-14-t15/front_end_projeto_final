import { createContext, useState } from "react";
import { IChildrenProps } from "../../types/@types";
import { IComment } from "../../interfaces/KenzieKarsContext.types";
import { api } from "../../services/api";
import { ICommentsContext } from "../../interfaces/commentsContext.types";

export const CommentsContext = createContext<ICommentsContext>(
  {} as ICommentsContext
);

export default function CommentsProvider({ children }: IChildrenProps) {
  const token: string | null = localStorage.getItem("@TOKEN");

  const [comments, setComments] = useState<IComment[]>([]);
  const [comment, setComment] = useState<IComment>();
  const [commentId, setCommentId] = useState<number | null>(null);

  const registerNewComment = async (
    dataComment: string,
    announcementeId: number
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

  const getAllCommentsOfAnnoucement = async (announcementId: number) => {
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

import { IComment } from "./KenzieKarsContext.types";

export interface ICommentsContext {
  comments: IComment[];
  getAllCommentsOfAnnoucement: (announcementId: string | undefined) => Promise<void>;
  registerNewComment: (
    dataComment: string,
    announcementeId: string | undefined
  ) => Promise<void>;
  getCommentToEdit: (commentId: number) => Promise<void>;
  comment: IComment | undefined;
  updateComment: (dataComment: string) => Promise<void>;
  setCommentId: React.Dispatch<React.SetStateAction<number | null>>;
  commentId: number | null;
  deleteComment: () => Promise<void>;
}

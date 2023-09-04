import { CommentsContext } from "../../context/CommentsContext/CommentsContext";
import { useState, useEffect, useContext } from "react";
import { IComment } from "../../interfaces/KenzieKarsContext.types";
import { StyledCommentCard } from "./style";
import { FaPen, FaTrashAlt } from "react-icons/fa";

interface ICommentCardProps {
  comment: IComment;
  handleOpenEdit: () => void;
  handleOpenDelete: () => void;
  commentId: number;
  setCommentId: React.Dispatch<React.SetStateAction<number>>;
}

export const CommentCard = ({
  comment,
  handleOpenEdit,
  handleOpenDelete,
}: ICommentCardProps) => {
  const loggedUserId = Number(localStorage.getItem("@USERID"));
  const { getCommentToEdit, setCommentId } = useContext(CommentsContext);

  const [loading, setLoading] = useState(false);

  function getInitials(name: string) {
    const words = name.split(" ");
    let initials = "";

    for (const word of words) {
      if (word.length > 0) {
        initials += word[0].toUpperCase();
      }
    }

    return initials.slice(0, 2);
  }

  const calcPublicationDate = (date: string) => {
    const currentDate = Number(new Date());
    const inicialDate = Number(new Date(date));

    const milisecDif = currentDate - inicialDate;

    const passedDays = Math.floor(milisecDif / (1000 * 60 * 60 * 24));

    if (passedDays < 1) {
      const passedHours = Math.floor(milisecDif / (1000 * 60 * 60));
      return `há ${passedHours} horas`;
    } else {
      return `há ${passedDays} dias`;
    }
  };

  return (
    <StyledCommentCard>
      <div className="container__header-comment">
        <div>
          <span className="user-icon">{getInitials(comment.author.name)}</span>
          <p className="comment-name">
            {" "}
            {comment.author.name}{" "}
            <span className="span-date">
              {" "}
              · {calcPublicationDate(comment.publication_date)}
            </span>{" "}
          </p>
        </div>
        {comment.author.id === loggedUserId ? (
          <div className="container__btns">
            {" "}
            <button
              onClick={() => {
                getCommentToEdit(comment.id);
                setCommentId(comment.id);
                handleOpenEdit();
              }}
            >
              {" "}
              <FaPen onClick={() => handleOpenEdit()} />{" "}
            </button>{" "}
            <button
              onClick={() => {
                setCommentId(comment.id);
                handleOpenDelete();
              }}
            >
              {" "}
              <FaTrashAlt />{" "}
            </button>
          </div>
        ) : null}
      </div>
      <p className="comment-text"> {comment.text} </p>
    </StyledCommentCard>
  );
};

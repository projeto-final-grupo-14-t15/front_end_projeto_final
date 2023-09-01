import { IComment } from "../../interfaces/KenzieKarsContext.types";
import { StyledCommentCard } from "./style";
import { FaPen, FaTrashAlt } from "react-icons/fa";

interface ICommentCardProps {
    comment:IComment;
}

export const CommentCard = ({comment}:ICommentCardProps) => {

    function getInitials(name:string) {
        const words = name.split(' ');
        let initials = '';
    
        for (const word of words) {
            if (word.length > 0) {
                initials += word[0].toUpperCase();
            }
        }

        return initials.slice(0, 2);
    }

    const loggedUserId = Number(localStorage.getItem("@USERID"))

    return (
        <StyledCommentCard>
            <div className="container__header-comment">
                <div>
                    <span className="user-icon">{getInitials(comment.author.name)}</span>
                    <p className="comment-name"> {comment.author.name} <span className="span-date"> · {comment.publication_date}</span> </p>
                </div>
                {
                    comment.author.id === loggedUserId ? <div className="container__btns"> <button> <FaPen/> </button> <button> <FaTrashAlt/> </button></div> : null
                }
            </div>
            <p className="comment-text"> {comment.text} </p>
        </StyledCommentCard>
    )
}
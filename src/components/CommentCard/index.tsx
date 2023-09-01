import { IComment } from "../../interfaces/KenzieKarsContext.types";
import { StyledCommentCard } from "./style";


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

    return (
        <StyledCommentCard>
            <div>
                <span className="user-icon">{getInitials(comment.author.name)}</span>
                <p className="comment-name"> {comment.author.name} <span className="span-date"> · {comment.publication_date}</span> </p>
                <button> Edit </button> <button> Delete </button>
            </div>
            <p className="comment-text"> {comment.text} </p>
        </StyledCommentCard>
    )
}
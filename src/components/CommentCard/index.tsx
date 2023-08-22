import { ICommentDataType } from "../../pages/announcementPage/mockComments";
import { StyledCommentCard } from "./style";

interface ICommentCardProps {
    comment:ICommentDataType;
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
                <span className="user-icon">{getInitials(comment.userName)}</span>
                <p className="comment-name"> {comment.userName} <span className="span-date"> · {comment.createdAt}</span> </p>
            </div>
            <p className="comment-text"> {comment.commentText} </p>
        </StyledCommentCard>
    )
}
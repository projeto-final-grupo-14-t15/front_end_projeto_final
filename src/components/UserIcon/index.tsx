import { StyledUserIcon } from "./style"

interface IUserNameProps {
    username:string;
}

export const UserIcon = ({username}:IUserNameProps) => {

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
    
    return(
        <StyledUserIcon>
                <span> {getInitials(username)} </span>
                <p> {username} </p>
        </StyledUserIcon>
    )
}
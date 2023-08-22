import { useNavigate } from "react-router-dom";
import { StyledUserIcon } from "./style"

interface IUserNameProps {
    user:any;
    clickable:string|null;
}

export const UserIcon = ({user, clickable}:IUserNameProps) => {
    const navigate = useNavigate();

    const onClickNavigate = (userId:number) =>{
        if (clickable === 'yes')
            navigate(`/announcer/${userId}`);
    }

    const getInitials = (name:string) =>{
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
        <StyledUserIcon clickable={clickable} onClick={() => onClickNavigate(Number(user.id))}>
                <span> {getInitials(user.name)} </span>
                <p> {user.name} </p>
        </StyledUserIcon>
    )
}
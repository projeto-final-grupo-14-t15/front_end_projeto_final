import { DefaultButton } from "../DefaultButton";
import { StyledCardUser } from "./style";

    /* interface ICardUserProps {
    user:IUser | null;
    } */

export const BigCardUser = (/* {user}:ICardUserProps */) => {

    const user  = 'null'
    
    return (
        <StyledCardUser >
            <div className="icon-initials"> CR </div>
            <p>  <strong className="text-user-name"> Nome do user aqui </strong> <span className="tag-announcer"> Anunciante </span> </p> 
            <p className="text-user-description"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>

            {
                user ?
                <>
                    <DefaultButton text="Criar Anuncio" textcolor="--color-brand1" type="button" backgroundColor="--color-grey10" bordercolor="--color-brand1" buttonFunction={console.log()}/>
                    
                </>
                :
                null
            }

        </StyledCardUser>
    )
}
import { StyledCardUser } from "./style";

/* interface ICardUserProps {
    user:any;
  } */

export const BigCardUser = (/* {user}:ICardUserProps */) => {
    
    return (
        <StyledCardUser >
            <div className="icon-initials"> CR </div>
            <p>  <strong> Nome do user aqui </strong> <span className="tag-announcer"> Anunciante </span> </p> 
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
        </StyledCardUser>
    )
}
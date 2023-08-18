import { Link } from "react-router-dom"
import { StyledDropDownMenu } from "./style"
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

export const DropDownUserMenu = () => {

    const { handleLogout } = useContext(LoginContext);

    return(
        <StyledDropDownMenu>
            <Link to="/login"> Editar Perfil </Link>
            <Link to="/login"> Editar endereço </Link>
            <Link to="/login"> Meus anúncios </Link>
            <button onClick={()=> handleLogout()}> Sair </button>
        </StyledDropDownMenu>
    )
}
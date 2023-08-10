import { Link } from "react-router-dom"
import { StyledDropDownMenu } from "./style"

export const DropDownUserMenu = () => {

    return(
        <StyledDropDownMenu>
            <Link to="/login"> Editar Perfil </Link>
            <Link to="/login"> Editar endereço </Link>
            <Link to="/login"> Meus anúncios </Link>
            <Link to="/login"> Sair </Link>
        </StyledDropDownMenu>
    )
}
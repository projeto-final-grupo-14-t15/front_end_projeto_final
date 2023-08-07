import { Link } from "react-router-dom"
import { StyledNavbar } from "./style"

export const Navbar = () => {
    const user  = null



    return(
        <StyledNavbar>
            {
                user ?
                <>
                    <button> seu perfil </button>
                </>
                :
                <>
                    <Link to="/login"> login </Link>
                    <Link to="/register"> Cadastro </Link>
                </>
            }
        </StyledNavbar>
    )
}
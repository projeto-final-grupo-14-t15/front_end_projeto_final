import { Link } from "react-router-dom"
import { StyledNavbar } from "./style"
import { DropDownUserMenu } from "../DropDownUserMenu"
import { UserIcon } from "../UserIcon"
import useHeader from "../../hooks/useHeader"

export const Navbar = () => {

    const { dropDownVisibility, userSetDropDownVisibility } = useHeader();
    
    const user  = null

    return(
        <StyledNavbar>
            {
                user ?
                <>
                    <button className="btn-dropdown-profile" onClick={userSetDropDownVisibility}> <UserIcon username="César Romero"/> </button>
                    <div className={dropDownVisibility}>
                        <DropDownUserMenu/>
                    </div>
                    
                </>
                :
                <>
                    <Link to="/login" className="link-login"> Fazer Login </Link>
                    <Link to="/register" className="link-register"> Cadastrar </Link>
                </>
            }
        </StyledNavbar>
    )
}
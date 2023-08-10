import { Link } from "react-router-dom"
import { StyledNavbar } from "./style"
import { DropDownUserMenu } from "../DropDownUserMenu"
import { UserIcon } from "../UserIcon"
import useHeader from "../../hooks/useHeader"

export const Navbar = () => {

    const { dropDownVisibility, userSetDropDownVisibility } = useHeader();
    
    const user  = "null"

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
                    <Link to="/login"> login </Link>
                    <Link to="/register"> Cadastro </Link>
                </>
            }
        </StyledNavbar>
    )
}
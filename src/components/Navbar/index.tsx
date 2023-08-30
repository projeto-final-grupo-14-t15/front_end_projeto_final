import { Link } from "react-router-dom"
import { StyledNavbar } from "./style"
import { DropDownUserMenu } from "../DropDownUserMenu"
import useHeader from "../../hooks/useHeader"
import { useContext } from "react"
import { UserIconForNavBar } from "../UserIconForNavBar"
import { LoginContext } from "../../context/LoginContext"

export const Navbar = () => {

    const { dropDownVisibility, userSetDropDownVisibility } = useHeader();

    const { userInfo } = useContext(LoginContext);
    
    return(
        <StyledNavbar>
            {
                userInfo ?
                <>
                    <button className="btn-dropdown-profile" onClick={userSetDropDownVisibility}> <UserIconForNavBar user={userInfo}/> </button>
                    <div className={dropDownVisibility}>
                        <DropDownUserMenu setVisibility={userSetDropDownVisibility}/>
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
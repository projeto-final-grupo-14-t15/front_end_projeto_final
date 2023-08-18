import { Link } from "react-router-dom"
import { StyledNavbar } from "./style"
import { DropDownUserMenu } from "../DropDownUserMenu"
import { UserIcon } from "../UserIcon"
import useHeader from "../../hooks/useHeader"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export const Navbar = () => {

    const { dropDownVisibility, userSetDropDownVisibility } = useHeader();

    const [userInfo, setUserInfo] = useState(null)
    
    const userId:any = localStorage.getItem('@USERID')

     useEffect(() => {
        const getUserInfo = async (userId:string|undefined) => {
          try {
              const response = await api.get(`/users/${userId}/`)
              setUserInfo(response.data)
          } catch (error) {
              console.log('ERRO AO OBTER INFORMAÇÕES DESSE USER')
          }
        };
        getUserInfo(userId)
      }, []);

    return(
        <StyledNavbar>
            {
                userInfo ?
                <>
                    <button className="btn-dropdown-profile" onClick={userSetDropDownVisibility}> <UserIcon user={userInfo}/> </button>
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
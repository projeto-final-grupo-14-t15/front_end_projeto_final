import { Link } from "react-router-dom";
import { StyledDropDownMenu } from "./style";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { ModalUserEdit } from "../ModalUserEdit";

export const DropDownUserMenu = () => {
   const { handleLogout } = useContext(LoginContext);

   const [opemEdit,setOpemEdit] = useState(false)

   const { userInfo } = useContext(LoginContext);

   return (
      <>
         <StyledDropDownMenu>
            <button onClick={()=> setOpemEdit(!opemEdit)}> Editar Perfil </button>
            <Link to="/login"> Editar endereço </Link>
            <Link to={`/myannouncements/${userInfo.id}`}> Meus anúncios </Link>
            <button onClick={() => handleLogout()}> Sair </button>
         </StyledDropDownMenu>
         <ModalUserEdit opemEdit={opemEdit} setOpemEdit={setOpemEdit}/>
      </>
   );
};

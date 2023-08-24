import { Link } from "react-router-dom";
import { StyledDropDownMenu } from "./style";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { ModalUserEdit } from "../ModalUserEdit";
import { ModalAddressEdit } from "../ModalAddressEdit";

export const DropDownUserMenu = () => {
  const { handleLogout } = useContext(LoginContext);

  const [openEdit, setOpenEdit] = useState(false);
  const [modal, setModal] = useState(false);

  const { userInfo } = useContext(LoginContext);

  return (
    <>
      <StyledDropDownMenu>
        <button onClick={() => setOpenEdit(!openEdit)}> Editar Perfil </button>
        <button onClick={() => setModal(!modal)}> Editar endereço </button>
        <Link to={`/myannouncements/${userInfo.id}`}> Meus anúncios </Link>
        <button onClick={() => handleLogout()}> Sair </button>
      </StyledDropDownMenu>
      <ModalUserEdit openEdit={openEdit} setOpenEdit={setOpenEdit} />
      <ModalAddressEdit modal={modal} setModal={setModal} />
    </>
  );
};

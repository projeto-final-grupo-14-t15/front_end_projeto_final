import { useNavigate } from "react-router-dom";
import { StyledDropDownMenu } from "./style";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { ModalUserEdit } from "../ModalUserEdit";
import { ModalAddressEdit } from "../ModalAddressEdit";
import useHeader from "../../hooks/useHeader";

export const DropDownUserMenu = ({setVisibility}:any) => {
  const { handleLogout } = useContext(LoginContext);

  const { swapBurgerIcon } = useHeader()

  const [openEdit, setOpenEdit] = useState(false);
  const [modal, setModal] = useState(false);

  const { userInfo } = useContext(LoginContext);

  const navigate = useNavigate()

  const handleOpenEdit = () =>{
    setOpenEdit(!openEdit)
    swapBurgerIcon()
    setVisibility()
  }

  const handleOpenEditAddress = () =>{
    setModal(!modal)
    swapBurgerIcon()
    setVisibility()
  }

  const handleOpenMyAnnouncements = () =>{
    navigate(`/myannouncements/${userInfo.id}`)
    swapBurgerIcon()
    setVisibility()
  }

  const handleClickLogout = () =>{
    handleLogout()
    swapBurgerIcon()
    setVisibility()
  }
 

  return (
    <>
      <StyledDropDownMenu>
        <button onClick={() => handleOpenEdit()}> Editar Perfil </button>
        <button onClick={() => handleOpenEditAddress()}> Editar endereço </button>
        <button onClick={() => handleOpenMyAnnouncements()}>   Meus anúncios </button>
        <button onClick={() => handleClickLogout()}> Sair </button>
      </StyledDropDownMenu>
      <ModalUserEdit openEdit={openEdit} setOpenEdit={setOpenEdit} />
      <ModalAddressEdit modal={modal} setModal={setModal} />
    </>
  );
};

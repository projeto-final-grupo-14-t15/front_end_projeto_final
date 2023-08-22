import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { IUserUpdate } from "../../interfaces/IUserContext";
import { userUpdateSchema } from "./validate";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
   CssTextField,
   StyledParagraph,
} from "../Forms/AnnouncementForm/AnnouncementInput/style";
import { ErrorMessage } from "@hookform/error-message";
import { StyledForm } from "../Forms/AnnouncementForm/style";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { ModalDeleteUser } from "../ModalDeleteUser";

interface IProps {
   opemEdit: boolean;
   setOpemEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalUserEdit = ({ opemEdit, setOpemEdit }: IProps) => {

   const { getUser, user, updateUser } = useContext(UserContext);

   const [opemDelete, setOpemDelete] = useState(false);

   const userId: string | null = localStorage.getItem("@USERID");

   useEffect(() => {
      getUser(userId);
   }, []);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<IUserUpdate>({
      resolver: zodResolver(userUpdateSchema),
   });

   const submit = (data: IUserUpdate) => {
      updateUser(data, userId);

      setOpemEdit(!opemEdit);
   };

   return (
      <>
         <Dialog open={opemEdit} scroll="body">
            <DialogTitle>Editar Perfil</DialogTitle>
            <span onClick={() => setOpemEdit(!opemEdit)}>X</span>

            <StyledForm onSubmit={handleSubmit(submit)}>
               <CssTextField
                  variant="outlined"
                  id={"name"}
                  label={"Nome"}
                  type={"text"}
                  defaultValue={user?.name}
                  {...register("name")}
               />

               <CssTextField
                  variant="outlined"
                  id={"email"}
                  label={"Email"}
                  type={"text"}
                  defaultValue={user?.email}
                  {...register("email")}
               />
               <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                     <StyledParagraph $fontColor="red">
                        {message}
                     </StyledParagraph>
                  )}
               />

               <CssTextField
                  variant="outlined"
                  id={"cpf"}
                  label={"CPF"}
                  type={"text"}
                  defaultValue={user?.cpf}
                  {...register("cpf")}
               />

               <CssTextField
                  variant="outlined"
                  id={"telephone"}
                  label={"Celular"}
                  defaultValue={user?.telephone}
                  type={"text"}
                  {...register("telephone")}
               />

               <CssTextField
                  variant="outlined"
                  id={"dateOfBirth"}
                  label={"Data de nascimento"}
                  defaultValue={user?.dateOfBirth}
                  type={"text"}
                  {...register("dateOfBirth")}
               />

               <CssTextField
                  variant="outlined"
                  id={"description"}
                  label={"Descrição"}
                  defaultValue={user?.description}
                  type={"text"}
                  multiline
                  {...register("description")}
               />

               <DialogActions>
                  <Button
                     variant="contained"
                     onClick={() => setOpemEdit(!opemEdit)}
                  >
                     Cancelar
                  </Button>

                  <Button
                     variant="contained"
                     onClick={() => setOpemDelete(!opemDelete)}
                  >
                     Excluir Perfil
                  </Button>
   
                  <Button type="submit" variant="contained">
                     Salva Alterações
                  </Button>

               </DialogActions>
            </StyledForm>
         </Dialog>

         <ModalDeleteUser
            opemDelete={opemDelete}
            setOpemDelete={setOpemDelete}
            userId={userId}
            opemEdit={opemEdit}
            setOpemEdit={setOpemEdit}
         />
      </>
   );
};

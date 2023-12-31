import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import { IUserUpdate } from "../../interfaces/IUserContext";
import { userUpdateSchema } from "./validate";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CssTextField,
  StyledParagraph,
} from "../Forms/AnnouncementForm/AnnouncementInput/style";
import { ErrorMessage } from "@hookform/error-message";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { ModalDeleteUser } from "../ModalDeleteUser";
import { StyledForm, TitleContainer } from "./styled";
import closerIcon from "../../assets/img/closerIcon.svg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LoginContext } from "../../context/LoginContext";

interface IProps {
  openEdit: boolean;
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalUserEdit = ({ openEdit, setOpenEdit }: IProps) => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("sm"));

  const { getUser, user, updateUser } = useContext(UserContext);
  const { attNavbar, setAttNavbar } = useContext(LoginContext);

  const [openDelete, setOpenDelete] = useState(false);

  const userId: string | null = localStorage.getItem("@USERID");

  useEffect(() => {
    getUser(userId);
    console.log(user);
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
    setAttNavbar(attNavbar + 1);
    setOpenEdit(!openEdit);
  };

  return (
    <>
      <Dialog open={openEdit} scroll="body">
        <Box
          sx={{
            width: mdUp ? 400 : 290,
            margin: mdUp ? "1rem" : "0.5rem",
          }}
        >
          <TitleContainer>
            <DialogTitle
              sx={{
                fontSize: mdUp ? "2rem" : "1.2rem",
                padding: "0rem",
              }}
            >
              Editar Perfil
            </DialogTitle>

            <img
              src={closerIcon}
              alt="ButtonCloser"
              aria-label="Botão para fechar o modal"
              onClick={() => setOpenEdit(!openEdit)}
            />
          </TitleContainer>

          <StyledForm onSubmit={handleSubmit(submit)}>
            <CssTextField
              variant="outlined"
              id={"name"}
              label={"Nome"}
              type={"text"}
              defaultValue={user?.name}
              {...register("name")}
            />
            {errors.name ? (
              <StyledParagraph $fontColor="red">
                {errors.name.message}
              </StyledParagraph>
            ) : null}
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
                <StyledParagraph $fontColor="red">{message}</StyledParagraph>
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
            <ErrorMessage
              errors={errors}
              name="cpf"
              render={({ message }) => (
                <StyledParagraph $fontColor="red">{message}</StyledParagraph>
              )}
            />
            <CssTextField
              variant="outlined"
              id={"telephone"}
              label={"Celular"}
              defaultValue={user?.telephone}
              type={"text"}
              {...register("telephone")}
            />
            <ErrorMessage
              errors={errors}
              name="telephone"
              render={({ message }) => (
                <StyledParagraph $fontColor="red">{message}</StyledParagraph>
              )}
            />
            <CssTextField
              variant="outlined"
              id={"dateOfBirth"}
              label={"Data de nascimento"}
              defaultValue={user?.dateOfBirth}
              type={"text"}
              {...register("dateOfBirth")}
            />
            <ErrorMessage
              errors={errors}
              name="dateOfBirth"
              render={({ message }) => (
                <StyledParagraph $fontColor="red">{message}</StyledParagraph>
              )}
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
            <ErrorMessage
              errors={errors}
              name="description"
              render={({ message }) => (
                <StyledParagraph $fontColor="red">{message}</StyledParagraph>
              )}
            />
            <ErrorMessage
              errors={errors}
              name="description"
              render={({ message }) => (
                <StyledParagraph $fontColor="red">{message}</StyledParagraph>
              )}
            />
            <DialogActions
              sx={{
                flexWrap: mdUp ? "nowrap" : "wrap",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => setOpenEdit(!openEdit)}
                sx={{
                  bgcolor: "#DEE2E6",
                  color: "#495057",
                  border: "1px solid #495057",
                  fontSize: mdUp ? "1.2rem" : "0.9rem",
                  width: mdUp ? "10rem" : "6rem",
                }}
              >
                Cancelar
              </Button>

              <Button
                variant="outlined"
                onClick={() => setOpenDelete(!openDelete)}
                sx={{
                  bgcolor: "#fff",
                  border: "1px solid #CD2B31",
                  color: "#CD2B31",
                  fontSize: mdUp ? "1.2rem" : "0.9rem",
                  width: mdUp ? "16.5rem" : "9rem",
                }}
              >
                Excluir Perfil
              </Button>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#4529E6",
                  fontSize: mdUp ? "1.2rem" : "0.9rem",
                  width: mdUp ? "20rem" : "11rem",
                }}
              >
                Salvar dados
              </Button>
            </DialogActions>
          </StyledForm>
        </Box>
      </Dialog>

      <ModalDeleteUser
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        userId={userId}
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
      />
    </>
  );
};

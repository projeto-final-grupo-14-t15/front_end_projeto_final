import { Button, Dialog, DialogTitle } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import closerIcon from "../../assets/img/closerIcon.svg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeP2_500 } from "../../styles/Typography";
import { Input } from "../InputsLoginAndRegister";
import { AddressData, addressUpdateSchema } from "./validate";
import { TitleContainer } from "../ModalUserEdit/styled";
import { StyledAddressEdit } from "./styled";

interface IProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalAddressEdit = ({ modal, setModal }: IProps) => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("sm"));
  const { getUser, user, updateAddress } = useContext(UserContext);

  const userId: string | null = localStorage.getItem("@USERID");

  useEffect(() => {
    getUser(userId);
  }, []);

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(addressUpdateSchema),
    defaultValues: {
      cep: user?.address.cep,
      state: user?.address.state,
      city: user?.address.city,
      street: user?.address.street,
      complement: user?.address.complement,
      number: user?.address.number,
    },
  });

  const submit = (data: AddressData) => {
    updateAddress(data, userId);

    setModal(!modal);
  };

  return (
    <>
      <Dialog open={modal} scroll="body">
        <StyledAddressEdit>
          <TitleContainer>
            <DialogTitle
              sx={{
                fontSize: mdUp ? "2rem" : "1.2rem",
                padding: "0rem",
              }}
            >
              Editar Endereço
            </DialogTitle>

            <img
              src={closerIcon}
              alt="ButtonCloser"
              aria-label="Botão para fechar o modal"
              onClick={() => setModal(!modal)}
            />
          </TitleContainer>
          <form
            action="
        "
            onSubmit={handleSubmit(submit)}
          >
            <ThemeP2_500 className="accountType" color="--color-grey0">
              Informações de endereço
            </ThemeP2_500>
            <Input
              labelText="CEP"
              placeHolder="00000.000"
              type="text"
              register={register("cep")}
              defaultValue={user?.address.cep}
            />
            <div className="addressInfoContainer">
              <Input
                labelText="Estado"
                placeHolder="Digitar Estado"
                type="text"
                register={register("state")}
                defaultValue={user?.address.state}
              />
              <Input
                labelText="Cidade"
                placeHolder="Digitar Cidade"
                type="text"
                register={register("city")}
                defaultValue={user?.address.city}
              />
            </div>
            <Input
              labelText="Rua"
              placeHolder="Digitar rua"
              type="text"
              register={register("street")}
              defaultValue={user?.address.street}
            />

            <div className="addressInfoContainer">
              <Input
                labelText="Número"
                placeHolder="Digitar número"
                type="text"
                register={register("number")}
                defaultValue={user?.address.number}
              />
              <Input
                labelText="Complemento"
                placeHolder="Ex: apart 307"
                type="text"
                register={register("complement")}
                defaultValue={user?.address.complement}
              />
            </div>
            <div className="buttonContainer">
              <Button
                variant="outlined"
                onClick={() => setModal(!modal)}
                sx={{
                  bgcolor: "#DEE2E6",
                  color: "#495057",
                  fontSize: mdUp ? "1.2rem" : "0.9rem",
                  width: mdUp ? "123px" : "6rem",
                  height: mdUp ? "48px" : "6rem",
                }}
              >
                Cancelar
              </Button>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#4529E6",
                  fontSize: mdUp ? "1.2rem" : "0.9rem",
                  width: mdUp ? "209px" : "11rem",
                  height: mdUp ? "48px" : "6rem",
                }}
              >
                Salvar Alterações
              </Button>
            </div>
          </form>
        </StyledAddressEdit>
      </Dialog>
    </>
  );
};

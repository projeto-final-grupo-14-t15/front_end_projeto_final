import { Input } from "../../components/InputsLoginAndRegister";
import { DefaultButton } from "../../components/DefaultButton";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ThemeH5_500 } from "../../styles/Typography";
import { StyledSendMail } from "./style";
import { UserContext } from "../../context/UserContext";
import { verifyEmailSchema } from "../recoverypassword/validator";
import { zodResolver } from "@hookform/resolvers/zod";

export const SendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(verifyEmailSchema),
  });

  const { submitMail } = useContext(UserContext);

  return (
    <StyledSendMail>
      <div className="form_Container">
        <ThemeH5_500>Recuperacao de senha</ThemeH5_500>
        <p>Enviaremos um email de recuperação para o email cadastrado</p>
        <form action="" onSubmit={handleSubmit(submitMail)}>
          <Input
            labelText="Email cadastrado"
            placeHolder="Digitar email"
            type="email"
            register={register("email")}
            errors={errors.email}
          />
          <DefaultButton
            text="Enviar email"
            bordercolor="--color-brand1"
            backgroundcolor="--color-brand2"
            textcolor="--color-whiteFixed"
            type="submit"
          />
        </form>
      </div>
    </StyledSendMail>
  );
};

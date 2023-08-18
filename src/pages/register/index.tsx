import { Input } from "../../components/InputsLoginAndRegister";

import { DefaultButton } from "../../components/DefaultButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { RegisterContext } from "../../context/RegisterContext";
import { registerSchema } from "./validator";
import { StyledRegisterMain } from "./style";
import { ThemeH5_500, ThemeP2_500 } from "../../styles/Typography";

export const Register = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { submitFunction } = useContext(RegisterContext);

  return (
    <StyledRegisterMain>
      <div className="form_Container">
        <ThemeH5_500>Cadastro</ThemeH5_500>
        <ThemeP2_500 className="personalInfo" color="--color-grey0">
          Informações pessoais
        </ThemeP2_500>

        <form action="" onSubmit={handleSubmit(submitFunction)}>
          <Input
            labelText="Nome"
            placeHolder="Ex: Samuel Leão"
            type="text"
            register={register("name")}
          />
          <Input
            labelText="Email"
            placeHolder="Ex: samuel@kenzie.com.br"
            type="email"
            register={register("email")}
          />
          <Input
            labelText="CPF"
            placeHolder="Ex: samuel@kenzie.com.br"
            type="text"
            register={register("cpf")}
          />
          <Input
            labelText="Celular"
            placeHolder="(DDD) 90000-0000"
            type="text"
            register={register("telephone")}
          />
          <Input
            labelText="Data de nascimento"
            placeHolder="00/00/00"
            type="text"
            register={register("dateOfBirth")}
          />
          <Input
            labelText="Descrição"
            placeHolder="Digitar descrição"
            type="text"
            register={register("description")}
          />

          <ThemeP2_500 className="accountType" color="--color-grey0">
            Tipo de conta
          </ThemeP2_500>
          <div className="radioContainer">
            <div className="button">
              <input
                type="radio"
                id="a25"
                value="true"
                {...register("isAdmin")}
              />
              <label className="btn btn-default" htmlFor="a25">
                Vendedor
              </label>
            </div>
            <div className="button">
              <input
                type="radio"
                id="a25"
                value="false "
                {...register("isAdmin")}
              />
              <label className="btn btn-default" htmlFor="a25">
                Comprador
              </label>
            </div>
          </div>
          <Input
            labelText="Senha"
            placeHolder="Digitar senha"
            type="password"
            register={register("password")}
          />

          <DefaultButton
            text="Finalizar cadastro"
            bordercolor="--color-brand1"
            backgroundColor="--color-brand2"
            textcolor="--color-whiteFixed"
            type="submit"
          />
        </form>
      </div>
    </StyledRegisterMain>
  );
};

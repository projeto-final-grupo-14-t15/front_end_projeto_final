import { Input } from "../../components/InputsLoginAndRegister";

import { DefaultButton } from "../../components/DefaultButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { RegisterContext } from "../../context/RegisterContext";
import { RegisterData, registerSchema } from "./validator";
import { StyledRegisterMain } from "./style";
import { ThemeH5_500, ThemeP2_500 } from "../../styles/Typography";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { submitFunction } = useContext(RegisterContext);


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    submitFunction(data as RegisterData);
  };

  return (
    <StyledRegisterMain>
      <div className="form_Container">
        <ThemeH5_500>Cadastro</ThemeH5_500>
        <ThemeP2_500 className="personalInfo" color="--color-grey0">
          Informações pessoais
        </ThemeP2_500>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelText="Nome"
            placeHolder="Ex: Samuel Leão"
            type="text"
            register={register("name")}
            errors={errors.name as FieldError}
          />
          <Input
            labelText="Email"
            placeHolder="Ex: samuel@kenzie.com.br"
            type="email"
            register={register("email")}
            errors={errors.email as FieldError}
          />
          <Input
            labelText="CPF"
            placeHolder="Ex: samuel@kenzie.com.br"
            type="text"
            register={register("cpf")}
            errors={errors.cpf as FieldError}
          />
          <Input
            labelText="Celular"
            placeHolder="(DDD) 90000-0000"
            type="text"
            register={register("telephone")}
            errors={errors.telephone as FieldError}
          />
          <Input
            labelText="Data de nascimento"
            placeHolder="00/00/00"
            type="text"
            register={register("dateOfBirth")}
            errors={errors.dateOfBirth as FieldError}
          />
          <Input
            labelText="Descrição"
            placeHolder="Digitar descrição"
            type="text"
            register={register("description")}
            errors={errors.description as FieldError}
          />

          <ThemeP2_500 className="accountType" color="--color-grey0">
            Informações de endereço
          </ThemeP2_500>
          <Input
            labelText="CEP"
            placeHolder="00000.000"
            type="text"
            register={register("cep")}
          />
          <div className="addressInfoContainer">
            <Input
              labelText="Estado"
              placeHolder="Digitar Estado"
              type="text"
              register={register("state")}
            />
            <Input
              labelText="Cidade"
              placeHolder="Digitar Cidade"
              type="text"
              register={register("city")}
            />
          </div>
          <Input
            labelText="Rua"
            placeHolder="Digitar rua"
            type="text"
            register={register("street")}
          />

          <div className="addressInfoContainer">
            <Input
              labelText="Número"
              placeHolder="Digitar número"
              type="text"
              register={register("number")}
            />
            <Input
              labelText="Complemento"
              placeHolder="Ex: apart 307"
              type="text"
              register={register("complement")}
            />
          </div>

          <ThemeP2_500 className="accountType" color="--color-grey0">
            Tipo de conta
          </ThemeP2_500>
          <div className="radioContainer">
            <div className="button">
              <input
                type="radio"
                id="a25"
                value="true"
                {...register("isSeller")}
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
                {...register("isSeller")}
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
            errors={errors.password as FieldError}
          />

          <DefaultButton
            text="Finalizar cadastro"
            bordercolor="--color-brand1"
            backgroundcolor="--color-brand2"
            textcolor="--color-whiteFixed"
            type="submit"
          />
        </form>
      </div>
    </StyledRegisterMain>
  );
};

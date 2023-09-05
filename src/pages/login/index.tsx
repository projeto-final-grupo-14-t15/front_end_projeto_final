import { Link } from "react-router-dom";
import { Input } from "../../components/InputsLoginAndRegister";
import { StyledLogin } from "./styledLogin";
import { DefaultButton } from "../../components/DefaultButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { schema } from "./validator";
import { ThemeH5_500, ThemeP2, ThemeP2_500 } from "../../styles/Typography";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { signIn } = useContext(LoginContext);

  return (
    <StyledLogin>
      <div className="form_Container">
        <ThemeH5_500>Login</ThemeH5_500>

        <form action="" onSubmit={handleSubmit(signIn)}>
          <Input
            labelText="Email"
            placeHolder="Digitar email"
            type="email"
            register={register("email")}
            errors={errors?.email}
          />
          <Input
            labelText="Senha"
            placeHolder="Digitar senha"
            type="password"
            register={register("password")}
            errors={errors.password}
          />
          <ThemeP2_500>
            <Link to="/sendmail">Esqueci minha senha</Link>
          </ThemeP2_500>
          <DefaultButton
            text="Entrar"
            bordercolor="--color-brand1"
            backgroundcolor="--color-brand2"
            textcolor="--color-whiteFixed"
            type="submit"
          />
        </form>

        <ThemeP2 color="--color-grey2">Ainda não possui conta?</ThemeP2>
        <Link to="/register" className="button">
          Cadastar
        </Link>
      </div>
    </StyledLogin>
  );
};

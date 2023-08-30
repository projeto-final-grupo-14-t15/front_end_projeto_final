import { Input } from "../../components/InputsLoginAndRegister";
import { DefaultButton } from "../../components/DefaultButton";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ThemeH5_500} from "../../styles/Typography";
import { StyledNewPassword } from "./style";
import { UserContext } from "../../context/UserContext";
import { RecoveryPasswordData, recoveryPasswordSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";

export const RecoveryPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RecoveryPasswordData>({
        mode: "onChange",
        resolver: zodResolver(recoveryPasswordSchema),
    });
    
    const { submitPassword } = useContext(UserContext);

    

    return (
        <StyledNewPassword>
            <div className="form_Container">
                <ThemeH5_500>Recuperacao de senha</ThemeH5_500>
                <p>Digite sua nova senha</p>
                <form action="" onSubmit={handleSubmit(submitPassword)}>
                    <Input
                        labelText="Nova Senha"
                        placeHolder="Digitar senha"
                        type="password"
                        register={register("password")}
                        errors={errors.password}
                    />
                    <Input
                        labelText="Confirme a senha"
                        placeHolder="Digitar novamente a senha"
                        type="password"
                        register={register("confirmPassword")}
                        errors={errors.confirmPassword}
                    />
                    <DefaultButton
                        text="Redefinir senha"
                        bordercolor="--color-brand1"
                        backgroundcolor="--color-brand2"
                        textcolor="--color-whiteFixed"
                        type="submit"
                    />
                </form>
            </div>
        </StyledNewPassword>
    );
};
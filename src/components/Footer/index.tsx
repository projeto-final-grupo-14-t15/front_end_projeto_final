import { StyledFooter, StyledFooterText, StyledFooterButton } from "./style";
import angleUp from "../../assets/img/angle-up.svg";
import { LogoWhite } from "../LogoWhite";

export const Footer = () => {
    return (
        <StyledFooter>
                <LogoWhite/>
                <StyledFooterText>© 2022 - Todos os direitos reservados.</StyledFooterText>
                <StyledFooterButton><img src={angleUp}/></StyledFooterButton> 
        </StyledFooter>
    )
}
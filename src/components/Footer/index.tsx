import { StyledFooter, StyledFooterText, StyledFooterButton } from "./style";
import angleUp from "../../assets/img/angle-up.svg";
import { LogoWhite } from "../LogoWhite";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <StyledFooter>
      <LogoWhite />
      <StyledFooterText>
        RoadRovers © 2023 - Todos os direitos reservados.
      </StyledFooterText>
      <StyledFooterButton onClick={() => scrollToTop()}>
        <img src={angleUp} />
      </StyledFooterButton>
    </StyledFooter>
  );
};

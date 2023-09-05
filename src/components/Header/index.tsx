import { Logo } from "../Logo";
import { Navbar } from "../Navbar";
import { StyledHeader } from "./style";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import useHeader from "../../hooks/useHeader";
import { GoX } from "react-icons/go";

export const Header = () => {
  const { iconBurger, swapBurgerIcon, navBarVisibility } = useHeader();

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <StyledHeader>
      <div
        className="container__logo"
        onClick={() => {
          goToHome();
        }}
      >
        <Logo />
      </div>

      <div className={navBarVisibility}>
        <Navbar />
      </div>

      <div className="hamburger" onClick={() => swapBurgerIcon()}>
        {iconBurger == "FaBars" ? (
          <FaBars size={35} color={"black"} />
        ) : (
          <GoX size={35} color={"black"} />
        )}
      </div>
    </StyledHeader>
  );
};

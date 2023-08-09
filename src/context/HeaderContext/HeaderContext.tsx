import { createContext, useState } from "react";
import { IChildrenProps } from "../../types/@types";
import { IHeaderContext } from "../../interfaces/IheaderContext";

export const HeaderContext = createContext({} as IHeaderContext);

export default function HeaderProvider({ children }: IChildrenProps) {
  const [navBarVisibility, setNavBarVisibility] = useState("hidden");
  const [iconBurger, setIconBurger] = useState('FaBars')

  const menuVisibility = () => {
    navBarVisibility == "hidden"
      ? setNavBarVisibility("visible")
      : setNavBarVisibility("hidden");
  };
  const swapBurgerIcon = () => {
    iconBurger == 'FaBars'
    ? setIconBurger('GoX')
    : setIconBurger('FaBars');
    menuVisibility()
}

  return (
    <HeaderContext.Provider value={{ menuVisibility, navBarVisibility, iconBurger,swapBurgerIcon }}>
      {children}
    </HeaderContext.Provider>
  );
}

export interface IHeaderContext {
  navBarVisibility: string;
  menuVisibility: () => void;
  iconBurger: string;
  swapBurgerIcon: () => void;
  userSetDropDownVisibility: () => void;
  dropDownVisibility: string;
}

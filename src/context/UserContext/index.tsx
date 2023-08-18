import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IUserContext } from "../../interfaces/IUserContext";
import { IChildrenProps } from "../../types/@types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildrenProps) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  return (
    <UserContext.Provider
      value={{
       
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

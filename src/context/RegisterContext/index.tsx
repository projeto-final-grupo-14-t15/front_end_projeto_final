import { createContext } from "react";
import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RegisterData } from "../../pages/register/validator";
import { api } from "../../services/api";

interface RegisterContextType {
  submitFunction: (data: RegisterData) => Promise<void>;
}
export const RegisterContext = createContext({} as RegisterContextType);
interface IDefaultProviderProps {
  children: React.ReactNode;
}

export const RegisterProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();

  async function submitFunction(data: RegisterData) {
    const newData = {
      cep: data.cep,
      state: data.state,
      city: data.city,
      street: data.street,
      complement: data.complement,
      number: data.number,
    };

    try {
      const response = await api.post("/users", data);
      await api.post(`/users/${response.data.id}/address`, newData);

      toast.success("Cliente cadastrado com sucesso!");
      setTimeout(() => {
        navigate("/login");
      }, 1300);
    } catch (error: any) {
      console.error(error);
      if (error.response.data.message == "Email already in use!") {
        toast.error(<p>Este email já está cadastrado! <br></br><br></br> <Link to={'https://road-rovers.vercel.app/sendmail'}>CLIQUE AQUI caso não se lembre de sua senha</Link></p> );
      } else {
        toast.error("Erro ao cadastrar cliente");
      }
    }
  }
  return (
    <RegisterContext.Provider value={{ submitFunction }}>
      {children}
    </RegisterContext.Provider>
  );
};

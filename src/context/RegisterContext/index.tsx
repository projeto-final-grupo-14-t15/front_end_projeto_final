import { createContext } from "react";
import React from "react";

import { useNavigate } from "react-router-dom";
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
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Erro ao cadastrar cliente");
    }
  }
  return (
    <RegisterContext.Provider value={{ submitFunction }}>
      {children}
    </RegisterContext.Provider>
  );
};

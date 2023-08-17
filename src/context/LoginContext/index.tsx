import { createContext, useEffect, useState } from "react";
import React from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginData } from "../../pages/login/validator";
import { RegisterData } from "../../pages/register/validator";

interface LoginContextType {
  signIn: (data: LoginData) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  registerUser: (data:RegisterData)=> void
}

export const LoginContext = createContext({} as LoginContextType);

interface IDefaultProviderProps {
  children: React.ReactNode;
}

export const LoginProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      setLoading(false);
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  async function signIn(data: LoginData) {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", token);
      setLoading(false);
      toast.success("Login efetuado com sucesso");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("Email ou senha incorretos");
    }
  }

  const registerUser = async(data: RegisterData)=>{
    try{
      const response = await api.post("/users", data);
      console.log(response.status);
      toast.success("Tudo certo!! Direcionado para login!", {
          autoClose: 3000,
      });
      setTimeout(()=>{navigate("/")}, 4000);
  }catch (error){
      toast.error("Algo errado! Verifique seus dados");
      console.log(error);
  }
  }

  return (
    <LoginContext.Provider
      value={{
        signIn,
        loading,
        setLoading,
        registerUser
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

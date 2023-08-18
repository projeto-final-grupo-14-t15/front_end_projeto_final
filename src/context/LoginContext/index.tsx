import { createContext, useEffect, useState } from "react";
import React from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginData } from "../../pages/login/validator";
import jwt_decode from "jwt-decode";

interface LoginContextType {
  signIn: (data: LoginData) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogout: () => void;
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
      console.log(response)
      const { token } = response.data;
      const userDecodedInfo:IUser = jwt_decode(token)
      const userId = userDecodedInfo!.id.toString()
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", token);
      window.localStorage.setItem("@USERID", userId);
      setLoading(false);
      toast.success("Login efetuado com sucesso");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
      navigate('/')
      window.location.reload()
    } catch (error) {
      toast.error("Email ou senha incorretos");
    }
  }
  
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload()
  };

  return (
    <LoginContext.Provider
      value={{
        signIn,
        loading,
        setLoading,
        handleLogout
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

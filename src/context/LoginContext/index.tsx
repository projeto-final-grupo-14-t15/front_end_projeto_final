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
  userInfo: any;
}

export const LoginContext = createContext({} as LoginContextType);

interface IDefaultProviderProps {
  children: React.ReactNode;
}

export const LoginProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [attNavbar, setAttNavbar] = useState(0);
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
      const userDecodedInfo: IUser = jwt_decode(token);
      const userId = userDecodedInfo!.id.toString();
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", token);
      window.localStorage.setItem("@USERID", userId);
      setLoading(false);
      setAttNavbar(1);
      toast.success("Login efetuado com sucesso");
      setTimeout(() => {
        navigate(`/myannouncements/${userId}`);
      }, 2000);
    } catch (error) {
      toast.error("Email ou senha incorretos");
    }
  }

  useEffect(() => {
    const getUserInfo = async (userId: string | undefined) => {
      try {
        const response = await api.get(`/users/${userId}/`);
        setUserInfo(response.data);
      } catch (error) {}
    };
    const userId: any = localStorage.getItem("@USERID");
    if (userId) {
      getUserInfo(userId);
    }
  }, [attNavbar]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <LoginContext.Provider
      value={{
        signIn,
        loading,
        setLoading,
        handleLogout,
        userInfo,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

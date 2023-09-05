import { createContext, useContext, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import {
  IUserContext,
  IUserResponse,
  IUserUpdate,
  RecoveryPass,
  iMail,
} from "../../interfaces/IUserContext";
import { IChildrenProps } from "../../types/@types";
import { api } from "../../services/api";
import { AxiosResponse } from "axios";
import { LoginContext } from "../LoginContext";
import { AddressData } from "../../components/ModalAddressEdit/validate";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildrenProps) => {
  const token: string | null = localStorage.getItem("@TOKEN");
  const navigate = useNavigate();

  const [user, setUser] = useState<IUserResponse | null>(null);

  const { handleLogout } = useContext(LoginContext);

  const getUser = async (id: string | null) => {
    try {
      const response: AxiosResponse<IUserResponse> = await api.get(
        `/users/${id}`
      );

      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const updateAddress = async (data: AddressData, id: string | null) => {
    try {
      const response = await api.patch(`/users/${id}/address`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      response.data;
      window.location.reload();
      toast.success('Endereço atualizado com sucesso')
    } catch (error) {
      console.error(error);
      toast.error('Falha ao atualizar endereço')
    }
  };
  const updateUser = async (data: IUserUpdate, id: string | null) => {
    try {
      const response: AxiosResponse<IUserResponse> = await api.patch(
        `/users/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      response.data;
      window.location.reload();
      toast.success('Dados do usuário atualizados com sucesso')
    } catch (error) {
      console.error(error);
      toast.error('Falha ao atualizar dados do usuário')
    }
  };

  const deleteUser = async (id: string | null) => {
    try {
      const response: AxiosResponse<void> = await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      response.data;
      toast.info('Sua conta foi excluída.')
      handleLogout();
    } catch (error) {
      console.error(error);
    }
  };

  const submitMail = async (data: iMail) => {
    try {
      await api.post("/users/resetPassword", data);
      toast.success("Email de recuperação enviado");
      setTimeout(() => {
        navigate(`/`);
      }, 2000);
    } catch (error) {
      toast.error("Credenciais invalidas! Tente novamente");
    }
  };

  const submitPassword = async (data: RecoveryPass) => {
    const token = window.location.pathname.split("/")[2];
    try {
      await api.patch(`/users/resetPassword/${token}`, {
        password: data.password,
      });
      setTimeout(() => {
        navigate(`/login`);
      }, 2000);
      toast.success("Senha redefinida");
    } catch (error) {
      toast.error("Credenciais invalidas! Tente novamente");
    }
  };

  return (
    <UserContext.Provider
      value={{
        updateUser,
        deleteUser,
        user,
        getUser,
        updateAddress,
        submitPassword,
        submitMail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

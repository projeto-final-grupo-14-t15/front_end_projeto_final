import { createContext, useContext, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import {
  IUserContext,
  IUserResponse,
  IUserUpdate,
} from "../../interfaces/IUserContext";
import { IChildrenProps } from "../../types/@types";
import { api } from "../../services/api";
import { AxiosResponse } from "axios";
import { LoginContext } from "../LoginContext";
import { AddressData } from "../../components/ModalAddressEdit/validate";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildrenProps) => {
  const token: string | null = localStorage.getItem("@TOKEN");

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
    } catch (error) {
      console.error(error);
    }
  };
  const updateUser = async (data: IUserUpdate, id: string | null) => {
    console.log(data);
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
    } catch (error) {
      console.error(error);
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
      handleLogout();
    } catch (error) {
      console.error(error);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

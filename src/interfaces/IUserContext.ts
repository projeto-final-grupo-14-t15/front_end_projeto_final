import { AddressData } from "../components/ModalAddressEdit/validate";

export interface IUserContext {
  updateUser: (data: IUserUpdate, id: string | null) => Promise<void>;
  updateAddress: (data: AddressData, id: string | null) => Promise<void>;
  deleteUser: (id: string | null) => Promise<void>;
  getUser: (id: string | null) => Promise<void>;
  user: IUserResponse | null;
  submitPassword: (data: RecoveryPass) => void;
  submitMail: (data: iMail) => void;
}

export interface IUserUpdate {
  name?: string;
  cpf?: string;
  email?: string;
  description?: string;
  telephone?: string;
  dateOfBirth?: string;
}

export interface IAddress {}

export interface IUserResponse {
  id?: number;
  name: string;
  isAdmin: boolean;
  isSeller: boolean;
  cpf: string;
  email: string;
  description: string;
  telephone: string;
  dateOfBirth: string;
  address: {
    cep: string;
    state: string;
    city: string;
    street: string;
    complement: string;
    number: string;
  };
}

export interface RecoveryPass {
  password: string;
  confirmPassword: string;
}

export interface iMail {
  email: string;
}

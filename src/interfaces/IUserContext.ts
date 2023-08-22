export interface IUserContext {
   updateUser: (data: IUserUpdate, id: string | null) => Promise<void>
   deleteUser: (id: string | null) => Promise<void>
   getUser: (id: string | null) => Promise<void>
   user: IUserResponse | null
}

export interface IUserUpdate{
   name?: string;
   cpf?: string;
   email?: string;
   description?: string;
   telephone?: string;
   dateOfBirth?: string;
}

export interface IUserResponse{
   id?:number
   name: string;
   isAdmin: boolean,
	isSeller: boolean,
   cpf: string;
   email: string;
   description: string;
   telephone: string;
   dateOfBirth: string;
}


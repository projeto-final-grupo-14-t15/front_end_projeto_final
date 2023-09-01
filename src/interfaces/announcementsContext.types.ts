import { ReactNode } from 'react';
// import { PropsValue } from 'react-select';

export interface IAnnouncementsProviderProps {
  children: ReactNode;
}

export interface IAnnouncementsContext {
  createAnnouncement: (dataAnnouncement: IAnnouncementsForm) => Promise<void>;
  editAnnouncement: (dataAnnouncement: any, announcementId:string | number) => Promise<void>;
  deleteAnnouncement: (dataAnnouncement: any) => Promise<void>;
  Announcements: IFilterResponse[];
  getAnnouncements: (data: IFilterData) => Promise<void>;
  allUserAnnouncements: IFilterResponse[];
  getAnnouncementsByUserId:(userId: number) => Promise<void>;
  annoncementsChanged: number;
}

export interface IAnnouncement {
    id: number;
    brand: string;
    description: string;
    model: string;
    year: string;
    km: string;
    fuel: string;
    color: string;
    higherThanFipe: boolean;
    price: string;
    fipePrice?: number,
    createdAt: string;
    updated_at: string;
    photos: string[] | { link: string; }[];
    user:IUser
  }

  export type IAnnouncementsForm = Omit<IAnnouncement, 'id' | 'createdAt' | 'updated_at' >;

export interface IFilterResponse{
   id?: number,
   brand?: string,
   description?: string,
   model?: string,
   year?: string,
   km?: number,
   fuel?: string,
   color?: string,
   higher_than_fipe?: boolean,
   price?: number,
   fipePrice?: number,
   createdAt?: Date,
   updated_at?: Date,
   isActive?:boolean,
   higherThanFipe?:boolean,
   photos?:string[]
   user:IUser,
}
export interface IFilterData{
   brand?: string,
   model?: string,
   year?: string,
   fuel?: string,
   color?: string,
   minPrice?: string,
   maxPrice?: string,
   minKm?:string
   maxKm?:string
}

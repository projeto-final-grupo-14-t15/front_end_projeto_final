import { ReactNode } from 'react';
// import { PropsValue } from 'react-select';

export interface IAnnouncementsProviderProps {
  children: ReactNode;
}

export interface IAnnouncementsContext {
  createAnnouncement: (dataAnnouncement: IAnnouncementsForm) => Promise<void>;
  Announcements: IFilterResponse[];
  getAnnouncements: (data: IFilterData) => Promise<void>;
  getAllAnnouncementsForFilter:(data: IFilterData) => Promise<void>;
  allAnnouncementsForFilter:IFilterResponse[];
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
    higher_than_fipe: boolean;
    price: string;
    createdAt: string;
    updated_at: string;
    // photos: string[];
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
   createdAt?: Date,
   updated_at?: Date,
   active?:boolean,
   higherThanFipe?:boolean,
   photos?:any[]
   user:any,
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

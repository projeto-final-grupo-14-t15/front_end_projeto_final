import { ReactNode } from "react";
import { IUser } from "./IUser";

export interface IAnnouncementsProviderProps {
  children: ReactNode;
}

export interface IAnnouncementsContext {
  createAnnouncement: (dataAnnouncement: IAnnouncementsForm) => Promise<void>;
  editAnnouncement: (
    dataAnnouncement: IAnnouncementsForm,
    announcementId?: number
  ) => Promise<void>;
  deleteAnnouncement: (id: number) => Promise<void>;
  Announcements: IFilterResponse[];
  getAnnouncements: (data: IFilterData) => Promise<void>;
  allUserAnnouncements: IFilterResponse[];
  getAnnouncementsByUserId: (userId: number) => Promise<void>;
  annoncementsChanged: number;
}

interface ImageData {
  id?: number;
  link: string;
  createdAt: string;
  updatedAt: string;
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
  fipePrice?: number | string;
  createdAt: string;
  updated_at: string;
  photos: string[] | ImageData[];
  user: IUser;
}

export interface IAnnouncementsForm {
  brand: string;
  description: string;
  model: string;
  year: string;
  km: string;
  fuel: string;
  color: string;
  higherThanFipe: boolean;
  price: string;
  fipePrice?: number | string;
  photos: { link: string }[];
}

export interface IFilterResponse {
  id?: number;
  brand?: string;
  description?: string;
  model?: string;
  year?: string;
  km?: number;
  fuel?: string;
  color?: string;
  higher_than_fipe?: boolean;
  price?: number;
  fipePrice?: number;
  createdAt?: Date;
  updated_at?: Date;
  isActive?: boolean;
  higherThanFipe?: boolean;
  photos?: string[] | ImageData[];
  user: IUser;
}

export interface IAnnouncementRequestData {
  brand: string;
  description: string;
  model: string;
  year: string;
  km: number;
  fuel: string;
  color: string;
  higher_than_fipe?: boolean;
  price: number;
  fipePrice: string;
  isActive?: boolean;
  higherThanFipe: boolean;
  photos: string[] | ImageData[];
}
export interface IFilterData {
  brand?: string;
  model?: string;
  year?: string;
  fuel?: string;
  color?: string;
  minPrice?: string;
  maxPrice?: string;
  minKm?: string;
  maxKm?: string;
}

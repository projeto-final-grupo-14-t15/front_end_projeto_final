import { ReactNode } from 'react';
// import { PropsValue } from 'react-select';

export interface IKenzieKarsProviderProps {
  children: ReactNode;
}

export interface IKenzieKarsContext {
  allBrands:string[];
  // createAnnouncement: (dataAnnouncement: IAnnouncementsForm) => Promise<void>;
  setLoadingForm: React.Dispatch<React.SetStateAction<boolean>>;
  loadingForm: boolean;
  modelsList: readonly string[];
  carsList: ICar[];
  getCarsPerBrands: (data: string | null) => Promise<void>;
  // getAllAnnouncementsForFilter:(data: IFilterData) => Promise<void>;
  // allAnnouncementsForFilter:IFilterResponse[];
}

export interface ICar {
  id: string
  name: string
  brand: string
  year: string
  fuel: number
  value: number
}


// export interface IAnnouncement {
//     id: number;
//     brand: string;
//     description: string;
//     model: string;
//     year: string;
//     km: string;
//     fuel: string;
//     color: string;
//     higher_than_fipe: boolean;
//     price: string;
//     createdAt: string;
//     updated_at: string;
//     // photos: string[];
//   }

//   export type IAnnouncementsForm = Omit<IAnnouncement, 'id' | 'createdAt' | 'updated_at' >;

// TODO: Adicionar cover Photo field, user_id field

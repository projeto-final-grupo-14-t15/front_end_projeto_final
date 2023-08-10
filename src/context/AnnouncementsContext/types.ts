import { ReactNode } from 'react';
// import { PropsValue } from 'react-select';

export interface IAnnouncementsProviderProps {
  children: ReactNode;
}

export interface IAnnouncementsContext {
  createAnnouncement: (dataAnnouncement: IAnnouncementsForm) => Promise<void>;
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

// TODO: Adicionar cover Photo field, user_id field

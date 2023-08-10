import { IAnnouncementsForm } from '../../../context/AnnouncementsContext/types';

export interface IAnnouncementFormProps {
  isCreateForm: boolean;
  submitFunction: (dataAnnouncement: IAnnouncementsForm) => Promise<void>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;  
}
import { IAnnouncementsForm, IFilterResponse } from "../../../interfaces/announcementsContext.types";
import { z } from "zod";
import { announcementSchema } from "./validations";

export interface IAnnouncementFormProps {
  isCreateForm: boolean;
  submitFunction: (dataAnnouncement: IAnnouncementsForm) => Promise<void>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;  
  announcement?: IFilterResponse;
}

export type announcementsDataForm = z.infer<typeof announcementSchema>
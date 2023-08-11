import { useForm } from "react-hook-form";

import { StyledForm } from "./style";
import { IAnnouncementFormProps } from "./types";
import AnnouncementInput from "./AnnouncementInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { announcementSchema } from "./validations";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { IAnnouncementsForm } from "../../../interfaces/announcementsContext.types";

const AnnouncementForm = ({
  submitFunction,
  isCreateForm,
  open,
  setOpen,
}: IAnnouncementFormProps) => {
  // const theme = useTheme();

  
//   const { createAnnouncement } = useAnnouncements();
//   const [openAnnouncementModal, setOpenAnnouncementModal] = useState(false);
  
//   <AnnouncementForm
//   isCreateForm={true}
//   open={openAnnouncementModal}
//   setOpen={setOpenAnnouncementModal}
//   submitFunction={createAnnouncement}
// />


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAnnouncementsForm>({
    resolver: zodResolver(announcementSchema),
  });

  const onSubmit = (data: IAnnouncementsForm) => {
    submitFunction(data);
    // closeModal();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Anunciar veículo
      </Button>
      <Dialog open={open} onClose={handleClose} scroll="body">
        <DialogTitle>Cadastre seu veículo</DialogTitle>
        <DialogContent>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <AnnouncementInput
              label="Marca"
              type="text"
              register={register("brand")}
              error={errors.brand}
            />
            <AnnouncementInput
              label="Modelo"
              type="text"
              register={register("model")}
              error={errors.model}
            />
            <AnnouncementInput
              label="Ano"
              type="number"
              register={register("year")}
              error={errors.year}
            />
            <AnnouncementInput
              label="Quilometragem"
              type="text"
              register={register("km")}
              error={errors.km}
            />
            <AnnouncementInput
              label="Combustível"
              type="text"
              register={register("fuel")}
              error={errors.fuel}
            />
            <AnnouncementInput
              label="Cor"
              type="text"
              register={register("color")}
              error={errors.color}
            />
            <AnnouncementInput
              label="Preço"
              type="text"
              register={register("price")}
              error={errors.price}
            />
            <AnnouncementInput
              label="Descrição"
              type="text"
              register={register("description")}
              error={errors.description}
            />
          <Button type="submit">Anunciar veículo</Button>
          </StyledForm>
        </DialogContent>
        <DialogActions>
          {isCreateForm ? (
            <span>
              <Button onClick={handleClose}>Cancelar</Button>
            </span>
          ) : (
            <span>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSubmit(submitFunction)}>Salvar alterações</Button>
            </span>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AnnouncementForm;

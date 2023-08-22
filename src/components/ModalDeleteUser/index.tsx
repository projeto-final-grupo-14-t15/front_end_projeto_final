import {
   Button,
   Dialog,
   DialogActions,
   DialogTitle,
   Typography,
} from "@mui/material";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

interface IProps {
   userId: string | null;
   opemDelete: boolean;
   opemEdit: boolean;
   setOpemDelete: React.Dispatch<React.SetStateAction<boolean>>;
   setOpemEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalDeleteUser = ({
   opemDelete,
   setOpemDelete,
   userId,
   opemEdit,
   setOpemEdit,
}: IProps) => {
   const { deleteUser } = useContext(UserContext);

   const submit = () => {
      deleteUser(userId);

      setOpemDelete(!opemDelete);
      setOpemEdit(!opemEdit);
   };

   return (
      <Dialog open={opemDelete} scroll="body">
         <DialogTitle>Excluir Perfil</DialogTitle>

         <Typography variant="h2">
            Tem certeza que deseja deletar esse perfil ?
         </Typography>

         <Typography variant="subtitle1">
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
         </Typography>

         <DialogActions>
            <Button
               variant="contained"
               onClick={() => setOpemDelete(!opemDelete)}
            >
               Cancelar
            </Button>

            <Button type="submit" variant="contained" onClick={submit}>
               Sim, excluir Perfil
            </Button>
         </DialogActions>
      </Dialog>
   );
};

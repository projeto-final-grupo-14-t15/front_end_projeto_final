import {
   Box,
   Button,
   Dialog,
   DialogActions,
   DialogTitle,
   Typography,
} from "@mui/material";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
   const theme = useTheme();
   const mdUp = useMediaQuery(theme.breakpoints.up("sm"));

   const { deleteUser } = useContext(UserContext);

   const submit = () => {
      deleteUser(userId);

      setOpemDelete(!opemDelete);
      setOpemEdit(!opemEdit);
   };

   return (
      <Dialog open={opemDelete} scroll="body">
         <Box
            sx={{
               width: mdUp ? 400 : 290,
               margin: mdUp ? "1rem" : "0.5rem",
               display:"flex",
               flexDirection:"column",
               gap:'1rem'
            }}
         >
            <DialogTitle
               sx={{ fontSize: mdUp ? "2rem" : "1.2rem", padding: "0rem" }}
            >
               Excluir Perfil
            </DialogTitle>

            <Typography
               variant="h2"
               sx={{ fontSize: mdUp ? "1.5rem" : "1rem", fontWeight: "500" }}
            >
               Tem certeza que deseja deletar esse perfil ?
            </Typography>

            <Typography
               variant="subtitle1"
               sx={{ fontSize: mdUp ? "1.5rem" : "1rem", fontWeight: "300" }}
            >
               Essa ação não pode ser desfeita. Isso excluirá permanentemente
               sua conta e removerá seus dados de nossos servidores.
            </Typography>

            <DialogActions>
               <Button
                  variant="outlined"
                  onClick={() => setOpemDelete(!opemDelete)}
                  sx={{
                     bgcolor: "#DEE2E6",
                     color: "#495057",
                     fontSize: mdUp ? "1.2rem" : "0.7rem",
                     width: mdUp ? "10rem" : "6rem",
                  }}
               >
                  Cancelar
               </Button>

               <Button
                  type="submit"
                  variant="outlined"
                  onClick={submit}
                  sx={{
                     bgcolor: "#FDD8D8",
                     color: "#CD2B31",
                     fontSize: mdUp ? "1.2rem" : "0.7rem",
                     width: mdUp ? "16rem" : "10rem",
                  }}
               >
                  Sim, excluir Perfil
               </Button>
            </DialogActions>
         </Box>
      </Dialog>
   );
};

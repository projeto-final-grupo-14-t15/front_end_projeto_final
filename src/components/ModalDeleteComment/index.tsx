import { Dialog, DialogTitle } from "@mui/material";

import closerIcon from "../../assets/img/closerIcon.svg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useContext, useState, useEffect } from "react";

import { TitleContainer } from "../ModalUserEdit/styled";
import { StyledCommentDelete } from "./styled";
import { CommentsContext } from "../../context/CommentsContext/CommentsContext";
import { DefaultButton } from "../DefaultButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ICommentUpdateData,
  commentUpdateschema,
} from "../../pages/announcementPage/validator";

interface IProps {
  modalDelete: boolean;
  setModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  commentId: number;
}
export const ModalCommentDelete = ({ modalDelete, setModalDelete }: IProps) => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("sm"));
  const { deleteComment } = useContext(CommentsContext);

  const handleSubmitDeleteComment = (event: any) => {
    event.preventDefault();

    deleteComment();

    setModalDelete(!modalDelete);
  };

  return (
    <>
      <Dialog open={modalDelete} scroll="body">
        <StyledCommentDelete>
          <TitleContainer>
            <DialogTitle
              sx={{
                fontSize: mdUp ? "2rem" : "1.2rem",
                padding: "0rem",
              }}
            >
              Deletar Comentário
            </DialogTitle>

            <img
              src={closerIcon}
              alt="ButtonCloser"
              aria-label="Botão para fechar o modal"
              onClick={() => setModalDelete(!modalDelete)}
            />
          </TitleContainer>
          <form
            action=""
            onSubmit={(event) => handleSubmitDeleteComment(event)}
          >
            <div className="addressInfoContainer">
              <DefaultButton
                text="Deletar Comentário"
                bordercolor="--color-brand1"
                backgroundcolor="--color-brand2"
                textcolor="--color-whiteFixed"
                type="submit"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setModalDelete(!modalDelete);
                }}
              >
                Cancelar
              </button>
            </div>
          </form>
        </StyledCommentDelete>
      </Dialog>
    </>
  );
};
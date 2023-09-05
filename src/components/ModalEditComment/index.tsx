import { Dialog, DialogTitle, TextField } from "@mui/material";

import closerIcon from "../../assets/img/closerIcon.svg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useContext, useState, useEffect } from "react";

import { TitleContainer } from "../ModalUserEdit/styled";
import { StyledCommentEdit } from "./styled";
import { CommentsContext } from "../../context/CommentsContext/CommentsContext";
import { DefaultButton } from "../DefaultButton";

interface IProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  commentId?: number;
}
export const ModalCommentEdit = ({ modal, setModal }: IProps) => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [textComment, setTextComment] = useState("");
  const { comment, updateComment } = useContext(CommentsContext);

  useEffect(() => {
    if (comment) {
      setTextComment(comment.text);
    }
  }, [comment]);

  const handleSubmitUpdateComment = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (textComment.trim().length !== 0) {
      updateComment(textComment);
    }
    setModal(!modal);
  };

  return (
    <>
      <Dialog open={modal} scroll="body">
        <StyledCommentEdit>
          <TitleContainer>
            <DialogTitle
              sx={{
                fontSize: mdUp ? "2rem" : "1.2rem",
                padding: "0rem",
              }}
            >
              Editar Comentário
            </DialogTitle>

            <img
              src={closerIcon}
              alt="ButtonCloser"
              aria-label="Botão para fechar o modal"
              onClick={() => setModal(!modal)}
            />
          </TitleContainer>
          <form
            action=""
            onSubmit={(event) => handleSubmitUpdateComment(event)}
          >
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="Comente aqui"
              value={textComment} // Use value prop to set the value of TextField
              onChange={(e) => setTextComment(e.target.value)} // Update textComment when the text changes
              style={{ width: "90%" }}
            />
            <DefaultButton
              text="Comentar"
              backgroundcolor="--color-brand1"
              bordercolor="--color-brand1"
              type="submit"
              textcolor="--color-grey10"
              buttonFunction={()=>null}
            />
          </form>
        </StyledCommentEdit>
      </Dialog>
    </>
  );
};

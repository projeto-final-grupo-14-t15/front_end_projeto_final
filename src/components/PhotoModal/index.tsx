import { useState } from "react";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { IAnnouncement } from "../../interfaces/announcementsContext.types";
import { StyledModal } from "./style";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

interface IPhotoModalProps {
  photo:
    | string
    | {
        link: string;
      };
  index: number;
  open: boolean;
  announcement: IAnnouncement;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PhotoModal({
  open,
  setOpen,
  photo,
  index,
  announcement,
}: IPhotoModalProps) {
  const [photoHere, setPhotoHere] = useState("");
  const [indexHere, setIndexHere] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
    // setIndexHere(index);
    setPhotoHere(photo.link);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img
        style={{ cursor: "pointer" }}
        className="miniature"
        key={index}
        src={photo.link}
        alt={`Photo ${index}`}
        onClick={() => handleClickOpen()}
      />
      <Dialog open={open} onClose={handleClose}>
        <StyledModal>
          <div className="modal">
            {Number(indexHere) > 0 ? (
              <p onClick={() => setIndexHere(indexHere - 1)}>
                <MdOutlineArrowBackIos className={"arrow active"} />
              </p>
            ) : (
              <p>
                <MdOutlineArrowBackIos className={"arrow inactive"} />
              </p>
            )}
            <div>
              <img
                className="expanded-img"
                key={indexHere}
                src={announcement.photos[indexHere].link}
                alt={`Photo ${index}`}
              />
            </div>
            {Number(indexHere) < announcement.photos.length - 1 ? (
              <p onClick={() => setIndexHere(indexHere + 1)}>
                <MdOutlineArrowForwardIos className={"arrow active"} />
              </p>
            ) : (
              <p>
                <MdOutlineArrowForwardIos className={"arrow inactive"} />
              </p>
            )}
          </div>
          <p className="pagination">
            {indexHere + 1}/{announcement.photos.length}
          </p>
        </StyledModal>
      </Dialog>
    </div>
  );
}

import { useContext } from "react";
import { AnnouncementsContext } from "../context/AnnouncementsContext";

export default function useAnnouncements() {
  return useContext(AnnouncementsContext);
}

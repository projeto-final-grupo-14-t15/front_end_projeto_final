import { useContext } from "react";
import { HeaderContext } from "../context/HeaderContext/HeaderContext";

export default function useHeader() {
  return useContext(HeaderContext);
}

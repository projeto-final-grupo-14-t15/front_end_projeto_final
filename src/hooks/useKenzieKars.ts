import { useContext } from "react";
import { KenzieKarsContext } from "../context/KenzieKarsContext";

export default function useKenzieKars() {
  return useContext(KenzieKarsContext);
}

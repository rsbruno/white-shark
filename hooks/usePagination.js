import { useContext } from "react";
import { PaginationContext } from "../contexts/paginationContext";

export default function usePagination() {
  const context = useContext(PaginationContext);
  return context;
}

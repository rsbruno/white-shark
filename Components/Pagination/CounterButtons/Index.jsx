import usePagination from "../../../hooks/usePagination";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

export function CounterButtons({ number }) {
  const { pagination, updateDataPage } = usePagination();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pagination.currentPage === number);
  }, [pagination, pagination.currentPage]);

  return (
    <div className={styles.container}>
      <button
        className={(isActive && styles.active) || ""}
        onClick={() => updateDataPage(number)}
      >
        {number}
      </button>
    </div>
  );
}

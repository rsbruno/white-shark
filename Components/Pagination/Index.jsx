import usePagination from "../../hooks/usePagination.js";
import { CounterButtons } from "./CounterButtons/Index.jsx";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

export function Pagination() {
  const { pagination } = usePagination();

  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    setButtons(() => []);
    for (let index = 1; index <= pagination.totalPages; index++) {
      setButtons((prevState) => [
        ...prevState,
        <CounterButtons key={index} number={index} />,
      ]);
    }
  }, [pagination]);

  function handleMinByPage() {
    if (pagination.currentPage === 1) return 1;
    else return (pagination.currentPage - 1) * pagination.showing;
  }

  function handleMaxByPage() {
    if (pagination.currentPage === pagination.totalPages) return pagination.totalElements;
    else return pagination.currentPage * pagination.showing;
  }

  return (
    <section className={styles.container}>
      <div className={styles.containerLabel}>
        Showing {handleMinByPage()} to {handleMaxByPage()} of {pagination.totalElements}{" "}
        entries
      </div>
      <div className={styles.containerControlls}>
        <span>Previous</span>
        <div className={styles.containerCounters}>{buttons}</div>
        <span>Next</span>
      </div>
    </section>
  );
}

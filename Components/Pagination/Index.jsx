import usePagination from "../../hooks/usePagination.js";
import { CounterButtons } from "./CounterButtons/Index.jsx";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

export function Pagination() {
  const { pagination, previousPage, nextPage } = usePagination();

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
        <button
          onClick={previousPage}
          className={(pagination.currentPage <= 1 && styles.inactive) || ""}
          disabled={pagination.currentPage <= 1}
          style={{ marginRight: "15px" }}
        >
          Previous
        </button>
        <div className={styles.containerCounters}>{buttons}</div>
        <button
          onClick={nextPage}
          className={
            (pagination.currentPage >= pagination.totalPages && styles.inactive) || ""
          }
          disabled={pagination.currentPage >= pagination.totalPages}
          style={{ marginLeft: "15px" }}
        >
          Next
        </button>
      </div>
    </section>
  );
}

import styles from "../../styles/guests/index.module.scss";
import Link from "next/link";
import { Pagination } from "../../Components/Pagination/Index.jsx";
import usePagination from "../../hooks/usePagination";
import { useEffect, useState } from "react";
import axios from "../../services/axios";
import Head from "next/head";

export default function Guests({ totalElements, totalPages, content }) {
  const { pagination, setPagination, updateDataPage } = usePagination();
  const [listGuests, setLisGuests] = useState([]);

  function handleMaxByPage(max) {
    setPagination((prevState) => ({ ...prevState, showing: Number(max) }));
    updateDataPage(1, max);
  }

  useEffect(() => {
    if (pagination.showing !== 10) {
      setPagination((prevState) => ({ ...prevState, showing: 10 }));
      updateDataPage(1, 10);
    }
  }, []);

  useEffect(() => {
    setLisGuests(() => pagination.content);
  }, [pagination.content]);

  useEffect(() => {
    setLisGuests(content);
    setPagination((prevState) => ({
      ...prevState,
      totalElements: totalElements,
      currentPage: 1,
      totalPages: totalPages,
    }));
  }, [content]);

  return (
    <>
      <Head>
        <title>SWH | List Guests</title>
      </Head>
      <section className={styles.listContainer}>
        <div className={styles.listContent}>
          <div className={styles.header}>
            <h2>Customers</h2>
            <Link href="/guests/add">
              <a>Add New Customer</a>
            </Link>
          </div>
          <div className={styles.listProps}>
            <div>
              Show
              <select
                name="byPage"
                id="byPage"
                onChange={(event) => handleMaxByPage(event.target.value)}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              entries
            </div>
            <div className={styles.containerInput}>
              <label>Search</label>
              <input type="text" />
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th className={styles.id}>#</th>
                <th className={styles.phone}>Phone Number</th>
                <th className={styles.first}>Fisrt</th>
                <th className={styles.last}>Last</th>
                <th className={styles.email}>Email Address</th>
              </tr>
            </thead>
            <tbody>
              {listGuests.map((guest, key) => {
                return (
                  <tr key={key}>
                    <td>{guest.id}</td>
                    <td>{guest.phoneNumber}</td>
                    <td>{guest.firstName}</td>
                    <td>{guest.lastName}</td>
                    <td>{guest.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const { data } = await axios.get(`/guests/search-paginated?pageNumber=0&pageSize=10`);
  const { totalElements, totalPages, content } = data;
  return {
    props: { totalElements, totalPages, content }, // will be passed to the page component as props
  };
}

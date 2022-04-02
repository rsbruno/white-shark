import React, { createContext, useContext, useState } from "react";
import axios from "../services/axios";

const PaginationContext = createContext({});

function PaginationProvider({ children }) {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    showing: 10,
    totalElements: 0,
    totalPages: 0,
    content: [],
  });

  async function updateDataPage(page, maxData) {
    const newPage = page || pagination.currentPage;
    const newMaxData = maxData || pagination.showing;

    if (page) {
      setPagination((prevState) => ({ ...prevState, currentPage: page }));
    }

    await axios
      .get(`/guests/search-paginated?pageNumber=${newPage - 1}&pageSize=${newMaxData}`)
      .then(({ data }) => {
        const { totalElements, totalPages, content } = data;
        setPagination((prevState) => ({
          ...prevState,
          totalElements: totalElements,
          currentPage: page,
          totalPages: totalPages,
          content: content,
        }));
      });
  }

  async function previousPage() {
    const page = pagination.currentPage - 2;
    const max = pagination.showing;
    console.log(page, max);
    if (page >= 0) {
      await axios
        .get(`/guests/search-paginated?pageNumber=${page}&pageSize=${max}`)
        .then(({ data }) => {
          const { totalElements, totalPages, content } = data;
          setPagination((prevState) => ({
            ...prevState,
            totalElements: totalElements,
            currentPage: pagination.currentPage - 1,
            totalPages: totalPages,
            content: content,
          }));
        });
    }
  }

  async function nextPage() {
    const page = pagination.currentPage;
    const max = pagination.showing;
    if (page !== pagination.totalPages) {
      await axios
        .get(`/guests/search-paginated?pageNumber=${page}&pageSize=${max}`)
        .then(({ data }) => {
          const { totalElements, totalPages, content } = data;
          setPagination((prevState) => ({
            ...prevState,
            totalElements: totalElements,
            currentPage: page + 1,
            totalPages: totalPages,
            content: content,
          }));
        });
    }
  }

  return (
    <PaginationContext.Provider
      value={{ pagination, setPagination, previousPage, nextPage, updateDataPage }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export { PaginationProvider, PaginationContext };

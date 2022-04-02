import "../styles/globals.scss";
import React from "react";
import styles from "../styles/template.module.scss";
import Link from "next/link";
import { PaginationProvider } from "../contexts/paginationContext";

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <PaginationProvider>
        <div className={styles.container}>
          <header>
            <div className={styles.titleContainer}>
              <Link href="/">
                <a>Sparkling Water Hostel</a>
              </Link>
            </div>
            <div className={styles.linkContainer}>
              <Link href="/guests">
                <a>Customers</a>
              </Link>
              <Link href="/">
                <a>Login</a>
              </Link>
            </div>
          </header>
          <Component {...pageProps} />
        </div>
      </PaginationProvider>
    </React.StrictMode>
  );
}

export default MyApp;

import styles from "../../styles/guests/index.module.scss";
import Link from "next/link";

export default function Guests() {
  return (
    <section className={styles.listContainer}>
      <div className={styles.listContent}>
        <div className={styles.header}>
          <h2>Customers</h2>
          <Link href="/guests/add">
            <a>Add New Customer</a>
          </Link>
        </div>
        <div className={styles.listProps}>
          <div>Show 10 entries</div>
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
            <tr>
              <td>1</td>
              <td>(35)992124676</td>
              <td>Bruno</td>
              <td>Santos</td>
              <td>bruno@google.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>(35)992124676</td>
              <td>Bruno</td>
              <td>Santos</td>
              <td>bruno@google.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td>(35)992124676</td>
              <td>Bruno</td>
              <td>Santos</td>
              <td>bruno@google.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

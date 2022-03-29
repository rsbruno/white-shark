import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <div className={styles.text_left}>
        <h1>Sparkling Water Hostel</h1> <br></br>
        <p>
          The Hostel Sparkling Water is a fictious hostel located in Caxambu-MG, Brazil.
          Caxambu is a small town (its population in 2020 was estimated at 22,000),
          renowed for its spa wich has twelve sources of sparking mineral water flowing 24
          hours a day and a cold-water geyser.
        </p>
        <br></br>
        <p>
          Caxambu is the only place in the world with 12 mineral water springs, each with
          different chemical properties.
        </p>
        <br></br>
        <h1>Park</h1>
        <br></br>
        <p>The Water Park is the main attraction in town.</p>
        <br></br>
        <img src="/hotel.jpg" width="70%" height="20%"></img>
        <p>Photo of the Bathhouse Located at The Water Park</p>
        <br></br>
      </div>

      <div className={styles.text_right}>
        <h1>How to get to the hostel</h1>
        <br></br>
        <h4>From Rio de Janeiro</h4> <br></br>
        <p>
          Via BR-116 (Presidente Dutra) west past Resende-RJ to the village of Engenheiro
          Passos-RJ and take BR-354 north.
        </p>
        <br></br>
        <h4>From Belo Horizonte or São Paulo</h4> <br></br>
        <p>Via Br-381 to Campanha-MG, than west on BR-267</p>
        <br></br>
        <h1>How to get to the hostel</h1>
        <br></br>
        <p>&quot;Never go on trips with anyone you do not love&quot;. Ernest Hemingway</p>
        <br></br>
        <p>
          &quot;To travel is to discover that everyone is wrong about other
          countries&quot;. Aldous Huxley
        </p>
      </div>
    </>
  );
}


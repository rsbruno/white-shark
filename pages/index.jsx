import styles from "../styles/Home.module.scss";
//import {API} from "https://gestao-hostel-app.herokuapp.com/"
import axios from '../services/axios.ts';

export default function Index({hello}) {
  return <h1 className={styles.title}>{hello.message}</h1>;

}

export const getServerSideProps = async () => {
    const response = await axios.get("/hello-world")
    return {
      props:{
          hello:response.data
        }
    }
};


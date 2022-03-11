import styles from "../styles/Home.module.scss";

export  function Index() {
  return <h1 className={styles.title}>Hello, Hostel App</h1>;
}

export const getServerSideProps = async () => {
    let response;
      axios.get("https://gestao-hostel-app.herokuapp.com/").then(function (asnwer){
        console.log(asnwer.data);
      });
    return {
      props:{
          hello:response
        }
    }
};
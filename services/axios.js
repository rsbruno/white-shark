import axios from "axios";

const instance = axios.create({
  baseURL: 'https://gestao-hostel-app.herokuapp.com',
  timeout: 1000,
});


export default instance;
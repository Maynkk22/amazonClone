import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-fir-421c1.cloudfunctions.net/api",
  //"http://localhost:5001/fir-421c1/us-central1/api",
});

export default instance;

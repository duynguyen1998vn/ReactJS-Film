import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    responseType: "json"
});

export default Axios;
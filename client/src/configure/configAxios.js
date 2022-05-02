import Axios from "axios";

const axios = Axios.create({
   baseURL: "http://localhost:3077/api",
});

export default axios;

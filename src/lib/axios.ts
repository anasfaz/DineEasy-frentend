import axios from "axios";

axios.defaults.withCredentials = true;
import { baseUserUrl } from "../utils/constUrls";

 const instance = axios.create({
    baseURL:baseUserUrl
})


export default instance;
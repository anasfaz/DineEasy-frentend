import axios from "axios";

axios.defaults.withCredentials = true;
import { baseUserUrl,baseAdminUrl } from "../utils/constUrls";

 const instance = axios.create({
    baseURL:baseUserUrl
})
const adminInstance = axios.create({
    baseURL:baseAdminUrl
})

export default instance;

export {adminInstance}
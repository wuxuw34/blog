import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const instance = axios.create();
const http = setupCache(instance);

export default http;

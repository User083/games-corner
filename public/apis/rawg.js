import axios from "axios";

const baseURL = "https://api.rawg.io/api/";


export default axios.create({
    baseURL: baseURL
})
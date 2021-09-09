import axios from "axios";
// axios HTTP client
//XMLHttpRequests on client
// native node.js http module on server
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;


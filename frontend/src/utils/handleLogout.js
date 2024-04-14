import axios from "axios";
import { api } from "./api";

const apiParam = api;

const handleLogout = () => {
    axios.get(`${apiParam}/user/logout`)
        .then(res => {
            location.reload(true);
        })
        .catch(err => {console.log(err)})
}

export { handleLogout };
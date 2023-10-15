import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: '278883ac0e234869848a29a51235a577'
    }
})
import axios from "axios"

const token = localStorage.getItem("token")

const AxiosWithAuth = () => axios.create({
    baseURL: "http://localhost:7000/",
    headers: {
        Authorization: token
    }
})

export default AxiosWithAuth
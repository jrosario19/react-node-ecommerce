import axios from 'axios'

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmM5MTQyOThjNmI5MmU0ZGM1ZjRjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjkwMDk2OCwiZXhwIjoxNjY3MTYwMTY4fQ.5SAoEXfQDnMjM87Oh7zaV-OSHBgWiYpD9ZTugobojuc";


export const publicRequest = axios.create({
    baseURL:BASE_URL,
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})
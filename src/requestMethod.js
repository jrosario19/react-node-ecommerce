import axios from 'axios'

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmM5MTQyOThjNmI5MmU0ZGM1ZjRjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTkzNDUwMCwiZXhwIjoxNjY2MTkzNzAwfQ.hcZAz12-Zw4PhW59F5bizgGfPF5qjh8vx-m9VxrWkBA";


export const publicRequest = axios.create({
    baseURL:BASE_URL,
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})
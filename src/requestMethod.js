import axios from 'axios'
import {store} from './redux/store';

const state = store.getState();

const token = state.user.currentUser ? state.user.currentUser.accessToken : null
const BASE_URL = "https://ecommerce-jfrs.herokuapp.com/api/";
const TOKEN = token;


export const publicRequest = axios.create({
    baseURL:BASE_URL,
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})
import axios from 'axios'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {store} from './redux/store';

 let authToken = "";
const getCurrentUser = () =>{
    
        const state = store.getState();
        authToken = state.user.currentUser==null ? null : state.user.currentUser.accessToken;
        return authToken;
}

getCurrentUser();


//const token = state.user.currentUser ? state.user.currentUser.accessToken : null
//const BASE_URL = "https://ecommerce-jfrs.herokuapp.com/api/";
const BASE_URL = "http://localhost:5000/api/";
//const TOKEN = authToken;


export const publicRequest = axios.create({
    baseURL:BASE_URL,
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    //headers:{token:`Bearer ${getCurrentUser()}`}
})
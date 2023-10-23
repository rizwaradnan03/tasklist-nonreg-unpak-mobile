import axios from 'axios'

export const ApiManager = axios.create({
    baseURL: 'http://192.168.18.93:4321',
    responseType: 'json',
    withCredentials: true
})
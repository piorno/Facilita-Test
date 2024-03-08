import axios from 'axios'
import { apiUrl } from './apiUrl'

export function setupAPIClient(){

    const api = axios.create({
        baseURL: `${apiUrl}/api`,
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error) => {
        return  Promise.resolve(error.response)
    })

    return api;
}
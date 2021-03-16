import axios, { AxiosResponse } from 'axios';
import { Reservation } from '../models/Reservation';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = <T> (response : AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T>  (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put:  <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>  (url: string) => axios.delete<T>(url).then(responseBody)
}

const Reservations = {
    list: () => requests.get<Reservation[]>('/Reservations')
}

const agent = {
    Reservations
}

export default agent;


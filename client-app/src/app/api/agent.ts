import axios, { AxiosResponse } from 'axios';
import { Reservation } from '../models/Reservation';


const sleep = (delay: number) => {
    return new Promise((resolve) =>  {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';


axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response : AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T>  (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put:  <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>  (url: string) => axios.delete<T>(url).then(responseBody)
}

const Reservations = {
    list: () => requests.get<Reservation[]>('/Reservations'),
    details: (id: string) => requests.get<Reservation>(`/Reservations/${id}`),
    create: (reservation: Reservation) => requests.post<void>('/Reservations', reservation),
    update: (reservation: Reservation) => requests.put<void>(`/Reservations/${reservation.id}`, reservation),
    delete: (id: string) => requests.del<void>(`/Reservations/${id}`)

}

const agent = {
    Reservations
}

export default agent;


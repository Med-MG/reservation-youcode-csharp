import axios, { AxiosResponse } from 'axios';
import { Reservation } from '../models/Reservation';
import { User, UserFormValues } from '../models/user';
import { store } from '../stores/store';
import { Status } from './../models/Status';


const sleep = (delay: number) => {
    return new Promise((resolve) =>  {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

//this peace of code makes sure that we send our token with every request
axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config
})

axios.interceptors.response.use(async response => {
    try {
        if(process.env.NODE_ENV === 'development')  await sleep(1000);
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
    listResUser: () => requests.get<Reservation[]>('/Reservations/UserReservations'),
    details: (id: string) => requests.get<Reservation>(`/Reservations/${id}`),
    create: (reservation: Reservation) => requests.post<void>('/Reservations', reservation),
    update: (reservation: Reservation) => requests.put<void>(`/Reservations/${reservation.id}`, reservation),
    updateStatus: (status: Status) => requests.put<void>(`/Reservations/status/${status.id}`, status),
    delete: (id: string) => requests.del<void>(`/Reservations/${id}`)

}

const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register', user)
}

const agent = {
    Reservations,
    Account
}

export default agent;


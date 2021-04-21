import { User } from "./user";


export interface Reservation {
    id: string;
    title: string;
    date: string;
    description: string;
    reservationType: string;
    status: number;
}

export interface ReservationUser {
    id: string;
    title: string;
    date: string;
    description: string;
    reservationType: string;
    status: number;
    user: User;
}
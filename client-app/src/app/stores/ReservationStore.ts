import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Reservation } from "../models/Reservation";
import {v4 as uuid} from 'uuid';
export default class ReservationStore {
    
    // reservations: Reservation[] = [];
    reservationRegistry = new Map<string, Reservation>();
    selectedReservation: Reservation | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get reservationsByDate() {
        return Array.from(this.reservationRegistry.values()).sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    }

    loadingReservations = async () => {
        // this.loadingInitial = true;
        // this.setLoadingInitial(true)
        try {
            const reservations = await agent.Reservations.list();
            reservations.forEach(el => {
                el.date = el.date.split('T')[0];
                // this.reservations.push(el);
                this.reservationRegistry.set(el.id, el);
              })
            //   this.loadingInitial = false;
            this.setLoadingInitial(false)

        } catch (error) {
            console.log(error);
            // this.loadingInitial = false;
            this.setLoadingInitial(false)
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectReservation = (id : string) => {
        // this.selectedReservation = this.reservations.find(a => a.id === id);
        this.selectedReservation = this.reservationRegistry.get(id);
    }

    cancelSelectedReservation = () => {
        this.selectedReservation = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectReservation(id) : this.cancelSelectedReservation();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createReservation = async (reservation: Reservation) => {
            this.loading = true;
            reservation.id = uuid();
            try {
                await agent.Reservations.create(reservation);
                runInAction(() => {
                    // this.reservations.push(reservation);
                    this.reservationRegistry.set(reservation.id, reservation);
                    this.selectedReservation = reservation;
                    this.editMode = false;
                    this.loading = false;
                })
            } catch (error) {
                console.log(error);
                runInAction(() => {
                    this.loading = false;
                })
            }
    }

    updateReservation = async (reservation : Reservation) => {
        this.loading = true;

        try {
            await agent.Reservations.update(reservation);

            runInAction(() => {
                // this.reservations = [...this.reservations.filter( res => res.id !== reservation.id), reservation];
                this.reservationRegistry.set(reservation.id, reservation);
                this.selectedReservation = reservation;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
                console.log(error);
                runInAction(() => {
                    this.loading = false
                })
        }
    }

    deleteReservation = async (id: string) => {
        this.loading = true;
        try {
            await agent.Reservations.delete(id);
            runInAction(() => {
                // this.reservations = [...this.reservations.filter(res => res.id !== id)];
                this.reservationRegistry.delete(id);
                if(this.selectedReservation?.id === id) this.cancelSelectedReservation();
                this.loading = false;
            })

        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false
            })
        }
    }

 }
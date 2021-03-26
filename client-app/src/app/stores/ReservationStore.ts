import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Reservation } from "../models/Reservation";
import {v4 as uuid} from 'uuid';
export default class ReservationStore {
    
    reservations: Reservation[] = [];
    selectedReservation: Reservation | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this)
    }

    loadingReservations = async () => {
        // this.loadingInitial = true;
        this.setLoadingInitial(true)
        try {
            const reservations = await agent.Reservations.list();
            reservations.forEach(el => {
                el.date = el.date.split('T')[0];
                this.reservations.push(el);
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
        this.selectedReservation = this.reservations.find(a => a.id === id);
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
                    this.reservations.push(reservation);
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
                this.reservations = [...this.reservations.filter( res => res.id !== reservation.id), reservation];
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

 }
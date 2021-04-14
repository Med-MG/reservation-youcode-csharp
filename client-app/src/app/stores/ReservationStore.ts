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
    pendinApproval: string = '';
    FilterMode: string = "pending";

    constructor() {
        makeAutoObservable(this)
    }



    //Filter Reservations byDate
    get reservationsByDate() {
        return Array.from(this.reservationRegistry.values()).sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    }
    //Get Only Approved Reservations
    get ApprovedReservations() {
        // eslint-disable-next-line eqeqeq
        return [...Array.from(this.reservationRegistry.values()).filter(x => x.status == 1)];
    }
    get DeniedReservations() {
        // eslint-disable-next-line eqeqeq
        return [...Array.from(this.reservationRegistry.values()).filter(x => x.status == 0)];
    }
    get PendingReservations() {
        // eslint-disable-next-line eqeqeq
        return [...Array.from(this.reservationRegistry.values()).filter(x => x.status == 2)];
    }

    get FilteredReservation() {
        if(this.FilterMode === "pending" ) return this.PendingReservations;
        if(this.FilterMode === "approved" ) return this.ApprovedReservations;
        if(this.FilterMode === "denied" ) return this.DeniedReservations;
        return []
    }

    setFilterMode = (mode: string) => {
        this.FilterMode = mode;
    }

    ApproveReservation = (id: string) => {
        let resrvationedit = this.reservationRegistry.get(id);
        resrvationedit && this.reservationRegistry.set(id, {...resrvationedit, status: 1});
    }

    //Load reservations for admin
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


    //Load only the users reservations
    loadingUserReservations = async () => {
        // this.loadingInitial = true;
        // this.setLoadingInitial(true)
        try {
            const reservations = await agent.Reservations.listResUser();
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


    InitStates = () => {
        this.reservationRegistry = new Map<string, Reservation>();
        this.selectedReservation = undefined;
        this.editMode = false;
        this.loading = false;
        this.loadingInitial = true;
        this.pendinApproval = '';
        this.FilterMode= "pending";
    }




 }
import { makeAutoObservable } from "mobx";

// import {v4 as uuid} from 'uuid';
export default class AdminReservationStore {
    

    FilterMode: string = "pending";

    constructor() {
        makeAutoObservable(this)
    }

    setFilterMode = (mode: string) => {
        this.FilterMode = mode;
    }


 }
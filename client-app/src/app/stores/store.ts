
import { createContext, useContext } from "react";
import CommonStore from "./CommonStore";
import ReservationStore from "./ReservationStore";
import UserStore from "./UserStore";
import ModalStore from './modalStore';
import AdminReservationStore from './AdminReservationStore';

interface Store {
    reservationStore: ReservationStore;
    adminStore: AdminReservationStore;
    userStore : UserStore;
    commonStore: CommonStore;
    modalStore: ModalStore;
}

export const store : Store = {
    reservationStore: new ReservationStore(),
    adminStore: new AdminReservationStore(),
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
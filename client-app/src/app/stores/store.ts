
import { createContext, useContext } from "react";
import CommonStore from "./CommonStore";
import ReservationStore from "./ReservationStore";
import UserStore from "./UserStore";
import ModalStore from './modalStore';

interface Store {
    reservationStore: ReservationStore;
    userStore : UserStore;
    commonStore: CommonStore;
    modalStore: ModalStore;
}

export const store : Store = {
    reservationStore: new ReservationStore(),
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
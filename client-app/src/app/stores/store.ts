
import { createContext, useContext } from "react";
import ReservationStore from "./ReservationStore";

interface Store {
    reservationStore: ReservationStore
}

export const store : Store = {
    reservationStore: new ReservationStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
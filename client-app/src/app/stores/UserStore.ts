import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { history } from "../..";
import { User, UserFormValues } from "../models/user";
import { store } from "./store";

export default class UserStore {
    
    user: User | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
        return !!this.user;
    }

    login = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.login(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => {
                this.user = user;
                user.tempRole === "admin" && store.commonStore.setAdmin();
            });
            
            if(user.tempRole === "admin") {
                history.push('/adminRes');
            } else {
                history.push('/Reservations');
            } 
            store.modalStore.closeModal();
            
        } catch (error) {
            throw error;
        }
    }


    logout = () => {
        store.commonStore.setToken(null);
        store.reservationStore.InitStates();
        window.localStorage.removeItem('jwt');

        this.user = null;
        history.push('/');
    }

    register = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            
            history.push('/Reservations');
            store.modalStore.closeModal();
            
        } catch (error) {
            throw error;
        }
    }

    getUser = async () => {
        try{
            const user = await agent.Account.current()
            runInAction(() => {
                this.user = user;
                user.tempRole === "admin" && store.commonStore.setAdmin();
            });
        } catch (error) {
            console.log(error);
            
        }
    }

}
import { makeAutoObservable, reaction } from "mobx";

export default class CommonStore {

    token: string | null  = window.localStorage.getItem('jwt') ;
    appLoaded = false;
    admin = false ;

    constructor(){
        makeAutoObservable(this);

        reaction(
            () => this.token, 
            token => {
                  if(token) {
                      window.localStorage.setItem('jwt', token)
                  } else {
                      window.localStorage.removeItem('jwt')
                  }
              }
        )
    }


    setToken = (token: string | null) => {
        this.token = token;
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }

    setAdmin = () => {
        this.admin = true;
    }

    get isAdmin() {
        return this.admin;
    }
   

}
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react"
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import FilterReservation from "../../filter/FilterReservation";
import ReservationDetails from "../details/ReservationDetails";
import ReservationForm from "../form/ReservationForm";
import ReservationList from "./ReservationList";

const ReservationDashboard = () => {
    const {reservationStore} = useStore();
    const {selectedReservation, editMode} = reservationStore;

    useEffect(() => { 
        reservationStore.loadingUserReservations();
    }, [reservationStore])
  
  
    if(reservationStore.loadingInitial) return <LoadingComponent content='Loading content'/>
    return (
       <Grid>
           <Grid.Column width="10">
                <ReservationList />
            </Grid.Column>
           <Grid.Column width="6">
               <FilterReservation />
               {
                selectedReservation && !editMode && 
                <ReservationDetails  />
               }
               { editMode && 
               <ReservationForm 
                 />  }
               
           </Grid.Column>
       </Grid>
    )
}

export default observer(ReservationDashboard) 

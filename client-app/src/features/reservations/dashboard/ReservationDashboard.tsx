import { observer } from "mobx-react-lite";
import { Grid } from "semantic-ui-react"
import { useStore } from "../../../app/stores/store";
import ReservationDetails from "../details/ReservationDetails";
import ReservationForm from "../form/ReservationForm";
import ReservationList from "./ReservationList";

const ReservationDashboard = () => {
    const {reservationStore} = useStore();
    const {selectedReservation, editMode} = reservationStore;
    return (
       <Grid>
           <Grid.Column width="10">
                <ReservationList />
           </Grid.Column>
           <Grid.Column width="6">
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

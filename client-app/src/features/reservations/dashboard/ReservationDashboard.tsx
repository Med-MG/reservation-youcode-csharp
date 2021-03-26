import { observer } from "mobx-react-lite";
import { Grid } from "semantic-ui-react"
import { Reservation } from '../../../app/models/Reservation';
import { useStore } from "../../../app/stores/store";
import ReservationDetails from "../details/ReservationDetails";
import ReservationForm from "../form/ReservationForm";
import ReservationList from "./ReservationList";

interface Props {
    reservations : Reservation[];
    createOrEdit: (reservation: Reservation) => void;
    deleteReservation: (id: string) => void;
    submitting: boolean;
}

const ReservationDashboard = ({reservations, createOrEdit, deleteReservation, submitting}: Props) => {
    const {reservationStore} = useStore();
    const {selectedReservation, editMode} = reservationStore;
    return (
       <Grid>
           <Grid.Column width="10">
                <ReservationList
                 submitting={submitting} 
                 deleteReservation={deleteReservation}  
                 reservations={reservations} 
                 />
           </Grid.Column>
           <Grid.Column width="6">
               {
                selectedReservation && !editMode && 
                <ReservationDetails  />
               }
               { editMode && 
               <ReservationForm 
                createOrEdit={createOrEdit}
                submitting={submitting}
                 />  }
               
           </Grid.Column>
       </Grid>
    )
}

export default observer(ReservationDashboard) 

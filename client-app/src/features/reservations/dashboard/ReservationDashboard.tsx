import { Grid } from "semantic-ui-react"
import { Reservation } from '../../../app/models/Reservation';
import ReservationDetails from "../details/ReservationDetails";
import ReservationForm from "../form/ReservationForm";
import ReservationList from "./ReservationList";

interface Props {
    reservations : Reservation[];
    selectReservation: (id: string) => void;
    SelectedReservation: Reservation | undefined;
    CancelSelectedReservation: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (reservation: Reservation) => void;
    deleteReservation: (id: string) => void;
}

const ReservationDashboard = ({reservations, selectReservation, SelectedReservation, CancelSelectedReservation, editMode, openForm, closeForm, createOrEdit, deleteReservation}: Props) => {
    return (
       <Grid>
           <Grid.Column width="10">
                <ReservationList deleteReservation={deleteReservation} selectReservation={selectReservation} reservations={reservations} />
           </Grid.Column>
           <Grid.Column width="6">
               {
                SelectedReservation && !editMode && 
                <ReservationDetails 
                    CancelSelectedReservation={CancelSelectedReservation} 
                    reservation={SelectedReservation}
                    openForm={openForm}
                    
                />
               }
               { editMode && <ReservationForm  closeForm={closeForm} reservation={SelectedReservation} createOrEdit={createOrEdit} />  }
               
           </Grid.Column>
       </Grid>
    )
}

export default ReservationDashboard

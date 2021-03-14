import { Grid } from "semantic-ui-react"
import { Reservation } from '../../../app/models/Reservation';
import ReservationDetails from "../details/ReservationDetails";
import ReservationList from "./ReservationList";

interface Props {
    reservations : Reservation[];
}

const ReservationDashboard = ({reservations}: Props) => {
    return (
       <Grid>
           <Grid.Column width="10">
                <ReservationList reservations={reservations} />
           </Grid.Column>
           <Grid.Column width="6">
               {reservations[0] && <ReservationDetails reservation={reservations[0]} />}
           </Grid.Column>
       </Grid>
    )
}

export default ReservationDashboard

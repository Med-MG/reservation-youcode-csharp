import { Button, Card, Image } from "semantic-ui-react"
import { Reservation } from "../../../app/models/Reservation"

interface Props{
    reservation: Reservation;
    CancelSelectedReservation: () => void;
    openForm: (id: string) => void;
}

const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
} 

const ReservationDetails = ({reservation, CancelSelectedReservation, openForm}: Props) => {
    return (
        <Card fluid>
        <Image src={`/assets/users/${getRandom(1, 7)}.jpg`} />
        <Card.Content>
          <Card.Header>{reservation.title}</Card.Header>
          <Card.Meta>
            <span>{reservation.date}</span>
          </Card.Meta>
          <Card.Description>
           { reservation.description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='2'>
              <Button onClick={()=>{openForm(reservation.id)}} basic color='blue' content='Edit' />
              <Button onClick={CancelSelectedReservation} basic color='grey' content='Cancel' />
          </Button.Group>
        </Card.Content>
      </Card>
    )
}

export default ReservationDetails

import { Button, Card, Image } from "semantic-ui-react"
import { Reservation } from "../../../app/models/Reservation"

interface Props{
    reservation: Reservation;
}
const ReservationDetails = ({reservation}: Props) => {
    return (
        <Card fluid>
        <Image src='/assets/users/m2.jpg'/>
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
              <Button basic color='blue' content='Edit' />
              <Button basic color='grey' content='Cancel' />
          </Button.Group>
        </Card.Content>
      </Card>
    )
}

export default ReservationDetails

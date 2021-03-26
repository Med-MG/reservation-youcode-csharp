import { observer } from "mobx-react-lite";
import { Button, Card, Image } from "semantic-ui-react"
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";



const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
} 

const ReservationDetails = () => {
  const {reservationStore} = useStore();
  const {selectedReservation : reservation} = reservationStore;
  if(!reservation) return <LoadingComponent />;
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
              <Button onClick={()=>{reservationStore.openForm(reservation.id)}} basic color='blue' content='Edit' />
              <Button onClick={reservationStore.cancelSelectedReservation} basic color='grey' content='Cancel' />
          </Button.Group>
        </Card.Content>
      </Card>
    )
}

export default observer(ReservationDetails)

import { observer } from "mobx-react-lite"
import { ChangeEvent, useState } from "react"
import { Button , Form, Segment } from "semantic-ui-react"
import { useStore } from "../../../app/stores/store"


const ReservationForm = () => {

    const {reservationStore} = useStore();
    const {selectedReservation, closeForm, createReservation, updateReservation, loading} = reservationStore;

    const initialState = selectedReservation ?? {
        id: '',
        title: '',
        description:'',
        reservationType:'',
        date:'',
        status: 2
    }

    const [reservation, setReservation] = useState(initialState)

    const handleSubmit = () => {
        reservation.id ? updateReservation(reservation) : createReservation(reservation);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setReservation({...reservation, [name]: value})
    }
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off' >
                <Form.Field>
                    <label>Full Name</label>
                    <input placeholder='Full Name' value={reservation.title} name='title' onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <textarea  placeholder='Description' name='description' value={reservation.description} onChange={handleInputChange}  />
                </Form.Field>
                <Form.Input placeholder='Date' type='date' name='date' value={reservation.date} onChange={handleInputChange}  />
                <Form.Input placeholder='Reservation Type' name='reservationType'  value={reservation.reservationType} onChange={handleInputChange}  />
                <Button  loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}
    
export default observer(ReservationForm) 

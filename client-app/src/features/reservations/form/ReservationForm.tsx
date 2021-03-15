import { ChangeEvent, useState } from "react"
import { Button , Form, Segment } from "semantic-ui-react"
import { Reservation } from "../../../app/models/Reservation"

interface Props{
    closeForm: () => void;
    reservation: Reservation | undefined;
    createOrEdit: (reservation: Reservation) =>void;
}

const ReservationForm = ({closeForm, reservation: selectedReservation, createOrEdit}: Props) => {

    const initialState = selectedReservation ?? {
        id: '',
        title: '',
        description:'',
        reservationType:'',
        date:'',
    }

    const [reservation, setReservation] = useState(initialState)

    const handleSubmit = () => {
        createOrEdit(reservation); 
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setReservation({...reservation, [name]: value})
    }
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off' >
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title' value={reservation.title} name='title' onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <textarea  placeholder='Description' name='description' value={reservation.description} onChange={handleInputChange}  />
                </Form.Field>
                <Form.Input placeholder='Date' name='date' value={reservation.date} onChange={handleInputChange}  />
                <Form.Input placeholder='Reservation Type' name='reservationType'  value={reservation.reservationType} onChange={handleInputChange}  />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}
    
export default ReservationForm

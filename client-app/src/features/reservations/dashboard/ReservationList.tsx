import { SyntheticEvent, useState } from "react";
import { Button, Item, ItemGroup, Label, Segment } from "semantic-ui-react"
import { Reservation } from "../../../app/models/Reservation"

interface Props{
    reservations : Reservation[];
    selectReservation: (id: string) => void;
    deleteReservation: (id: string) => void;
    submitting: boolean;
}




const ReservationList = ({reservations, selectReservation, deleteReservation, submitting}: Props) => {
    const [target, setTarget] = useState('');

    const handleReservationDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(id);
        deleteReservation(id);
    }

    return (
        <Segment>
            <ItemGroup divided>
                {
                    reservations.map( res => 
                        
                        <Item key={res.id} >
                            <Item.Content>
                                <Item.Header as='a' >{res.title}</Item.Header>
                                <Item.Meta>{res.date}</Item.Meta>
                                <Item.Description>
                                    <div>{res.description}</div>
                                </Item.Description>
                                <Item.Extra>
                                    <Button onClick={() => selectReservation(res.id)} floated='right' content='View' color='blue'/>
                                    <Button  loading={submitting && target === res.id} onClick={(e) => handleReservationDelete(e, res.id)} floated='right' content='Delete' color='red'/>
                                    <Label basic content={res.reservationType}/>
                                </Item.Extra>
                            </Item.Content>
                        </Item>

                        )
                }
            </ItemGroup>
        </Segment>
    )
}

export default ReservationList

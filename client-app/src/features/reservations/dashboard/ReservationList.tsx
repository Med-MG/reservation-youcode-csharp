import { Button, Item, ItemGroup, Label, Segment } from "semantic-ui-react"
import { Reservation } from "../../../app/models/Reservation"

interface Props{
    reservations : Reservation[];
    selectReservation: (id: string) => void;
    deleteReservation: (id: string) => void;
}


const ReservationList = ({reservations, selectReservation, deleteReservation}: Props) => {
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
                                    <Button onClick={() => deleteReservation(res.id)} floated='right' content='Delete' color='red'/>
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

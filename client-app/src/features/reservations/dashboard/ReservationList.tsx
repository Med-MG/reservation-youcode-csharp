import { Button, Item, ItemGroup, Label, Segment } from "semantic-ui-react"
import { Reservation } from "../../../app/models/Reservation"

interface Props{
    reservations : Reservation[];
}


const ReservationList = ({reservations}: Props) => {
    return (
        // <List>
        //     {reservations.map( reservation => 
        //     <List.Item key={reservation.id} >
        //         {reservation.title}
        //     </List.Item>
        //     )}
        // </List>

        <Segment>
            <ItemGroup divided>
                {
                    reservations.map( res => 
                        
                        <Item Key={res.id} >
                            <Item.Content>
                                <Item.Header as='a' >{res.title}</Item.Header>
                                <Item.Meta>{res.date}</Item.Meta>
                                <Item.Description>
                                    <div>{res.description}</div>
                                </Item.Description>
                                <Item.Extra>
                                    <Button floated='right' content='View' color='blue'/>
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

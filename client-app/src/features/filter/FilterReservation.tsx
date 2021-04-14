import React from 'react'
import { Button, Header, Segment } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store';

const FilterReservation = () => {

    const {reservationStore: {setFilterMode}} = useStore();

    return (
        <Segment>
            <Header as='h2'>Filter Reservations</Header>
            <Button color='green' onClick={() => setFilterMode('approved') } >Approved </Button>
            <Button color='orange' onClick={() => setFilterMode('denied')} >Denied </Button>
            <Button color='grey' onClick={() => setFilterMode('pending')}>Pending </Button>
        </Segment>
    )
}

export default FilterReservation

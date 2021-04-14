// import React, { useEffect, useState } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Reservation } from './../../../app/models/Reservation';

const AdminReservationList = () => {
    const {reservationStore} = useStore();
    const {FilteredReservation, ApproveReservation} = reservationStore;
    

    const getRandom = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
    } 




    return (
        <Card.Group>
        {}
        {FilteredReservation.map(res => (
        <Card key={res.id} >
            <Card.Content>
            <Image
                floated='right'
                size='mini'
                src={`assets/users/${getRandom(1,7)}.jpg`}
            />
            <Card.Header>{res.title}</Card.Header>
            <Card.Meta>{res.date}</Card.Meta>
            <Card.Description>
                {res.reservationType}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <div className='ui two buttons'>
                <Button onClick={()=> ApproveReservation(res.id)} basic color='green'>
                    Approve
                </Button>
                <Button basic color='red'>
                    Cancel
                </Button>
            </div>
            </Card.Content>
        </Card>
        ))}




    </Card.Group>
    )
}

export default observer(AdminReservationList) 

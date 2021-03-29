import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

const NavBarAdmin = () => {
    const {reservationStore} = useStore();
    return (
        <Menu inverted fixed='top'>
        <Container>
            <Menu.Item header>
                  <img src="/assets/logo.png" alt="logo" style={{marginRight: '1rem'}} />
                  Reservation
            </Menu.Item>
            <Menu.Item name="TodaysReservations" />
            <Menu.Item name="ApprovedReservations" />
            <Menu.Item name="RejectedReservations" />
            <Menu.Item name="Users" />
        </Container>
     </Menu>
    )
}

export default NavBarAdmin

import { observer } from 'mobx-react-lite';
import { Button, Container, Menu } from 'semantic-ui-react'
import { useStore } from '../stores/store'
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    const {reservationStore} = useStore();
    return (
       <Menu inverted fixed='top'>
          <Container>
              <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '1rem'}} />
                    Reservation
              </Menu.Item>
              <Menu.Item as={NavLink} to='/reservations' name="Reservations" />
              <Menu.Item>
                  {/* <Button  onClick={() => reservationStore.openForm()} positive content='Create Reservation'/> */}
                  <Button as={NavLink} exact to='/CreateReservation' positive content='Create Reservation'/>
              </Menu.Item>
          </Container>
       </Menu>
    )
}

export default observer(NavBar)

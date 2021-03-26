import { observer } from 'mobx-react-lite';
import { Button, Container, Menu } from 'semantic-ui-react'
import { useStore } from '../stores/store'



const NavBar = () => {
    const {reservationStore} = useStore();
    return (
       <Menu inverted fixed='top'>
          <Container>
              <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '1rem'}} />
                    Reservation
              </Menu.Item>
              <Menu.Item name="Reservations" />
              <Menu.Item>
                  <Button onClick={() => reservationStore.openForm()} positive content='Create Reservation'/>
              </Menu.Item>
          </Container>
       </Menu>
    )
}

export default observer(NavBar)

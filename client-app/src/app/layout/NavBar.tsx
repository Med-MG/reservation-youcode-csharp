import { observer } from 'mobx-react-lite';
import { Button, Container, Dropdown, Image, Menu, MenuItem } from 'semantic-ui-react'
import { Link  } from 'react-router-dom';
import { useStore } from '../stores/store'
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    const {userStore: {user, logout}, commonStore: {isAdmin},reservationStore } = useStore();
    
    return (
       <Menu inverted fixed='top'>
          <Container>
              <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '1rem'}} />
                    Reservation
              </Menu.Item>
                {isAdmin ? 
                    <>
                        <Menu.Item as={NavLink} to='/adminRes' name="Reservations" /> 
                        <Menu.Item as={NavLink} to='/Users' name="Users" /> 
                    </>
                    :
                    <Menu.Item as={NavLink} to='/reservations' name="Reservations" />
                }
              
              <Menu.Item>
                  <Button  onClick={() => reservationStore.openForm()} positive content='Create Reservation'/>
                  {/* <Button as={NavLink} exact to='/CreateReservation' positive content='Create Reservation'/> */}
              </Menu.Item>

              <MenuItem position='right'>
                  <Image src={user?.image || '/assets/users/1.jpg'} avatar spaced='right' />
                  <Dropdown pointing='top left' text={user?.displayName} >
                      <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profile/${user?.username}`} text='My profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                      </Dropdown.Menu>

                  </Dropdown>
              </MenuItem>
          </Container>
       </Menu>
    )
}

export default observer(NavBar)

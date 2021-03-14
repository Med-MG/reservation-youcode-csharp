import { Button, Container, Menu } from 'semantic-ui-react'

const NavBar = () => {
    return (
       <Menu inverted fixed='top'>
          <Container>
              <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '1rem'}} />
                    Reservation
              </Menu.Item>
              <Menu.Item name="Reservations" />
              <Menu.Item>
                  <Button positive content='Create Reservation'/>
              </Menu.Item>
          </Container>
       </Menu>
    )
}

export default NavBar

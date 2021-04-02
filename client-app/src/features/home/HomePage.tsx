import React from 'react'
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';
import { observer } from 'mobx-react-lite';


const HomePage = () => {
    const {userStore, modalStore} = useStore();
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{marginBottom: 12}} />
                    Reservations
                </Header>
                {userStore.isLoggedIn ? (
                    <>
                        <Header as='h2' inverted content='Welcome to YC Reservations' />
                        <Button as={Link} to='/reservations' size='huge' inverted>
                            Go to reservations!
                        </Button>
                    </>
                ) : (
                    <>
                        <Button onClick={()=> modalStore.openModal(<LoginForm/>)}  size='huge' inverted>
                            Login!
                        </Button>
                        <Button onClick={()=> modalStore.openModal(<RegisterForm/>)}  size='huge' inverted>
                            Register
                        </Button>
                    </>
                )}

            </Container>
        </Segment>
    )
}

export default observer(HomePage) 

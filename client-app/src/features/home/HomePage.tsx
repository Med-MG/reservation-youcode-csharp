import React from 'react'
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{marginBottom: 12}} />
                    Reservations
                </Header>
                <Header as='h2' inverted content='Welcome to YC Reservations' />
                <Button as={Link} to='/LoginForm' size='huge' inverted>
                    Login!
                </Button>
            </Container>
        </Segment>
    )
}

export default HomePage

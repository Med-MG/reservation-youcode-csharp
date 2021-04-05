import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Grid, Header, Image } from 'semantic-ui-react'

const AccessRestriction = () => {
    return (
        <Container style={{marginTop: '7em'}}>
            <Grid>
                <Grid.Column width={10}>
                    <div style={{paddingTop: '7em'}} >
                        <Header as='h1' content='Access Denied' />
                        <Header  as='h5' content="It seems that you're lost. Let us help guide you out and get you back home." />
                        <Button color='teal' as={Link} to="/">Home</Button>
                        <Button color='blue'>Login</Button>
                    </div>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Image src='assets/access.png' />
                </Grid.Column>
            </Grid>

        </Container>
    )
}

export default AccessRestriction

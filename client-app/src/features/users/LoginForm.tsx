import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link  } from 'react-router-dom';

const LoginForm = () => {

  
    const initialState = {
        username: '',
        password: '',
    }

    const [loginForm, setLoginForm] = useState(initialState)

    const HandleSubmit = () => {
        console.log(loginForm);
        
    }
   

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setLoginForm({...loginForm, [name]: value})
    }

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='/assets/logo.png' /> Log-in to your account
            </Header>
            <Form onSubmit={HandleSubmit} size='large' >
                <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' name="username" placeholder='E-mail address' onChange={handleInputChange} />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    name="password"
                    placeholder='Password'
                    type='password'
                    onChange={handleInputChange}
                />

                <Button color='teal' fluid size='large'>
                    Login
                </Button>
                </Segment>
            </Form>
            <Message>
                New to us? <Link to="/SignUp">Sign Up</Link>
            </Message>
            </Grid.Column>
        </Grid>
    )
}

export default LoginForm

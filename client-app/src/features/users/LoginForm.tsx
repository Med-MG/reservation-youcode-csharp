import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link  } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../app/stores/store';

const LoginForm = () => {

    const {userStore} = useStore();
  
    const initialState = {
        email: '',
        password: '',
    }

    const [loginForm, setLoginForm] = useState(initialState)
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [error, setError] = useState({status: false, header: '', content: ''})
    const HandleSubmit = async () => {
        setIsSubmiting(true)
        try {
            await  userStore.login(loginForm)
            setIsSubmiting(false)
            setError({status: false, header: '', content: ''})
        } catch (error) {
            console.log(error);
            setError({status: true, header: 'login failed' ,content: 'Incorrect username or password' })
            setIsSubmiting(false)
        }
        

    }
   

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setLoginForm({...loginForm, [name]: value})
    }

    return (
        <Grid textAlign='center' style={{ height: '100%'}} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450, width: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                Log-in to your account
            </Header>
            <Form onSubmit={HandleSubmit} size='large' error={error.status} >
                <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' name="email" placeholder='E-mail address' onChange={handleInputChange} />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    name="password"
                    placeholder='Password'
                    type='password'
                    onChange={handleInputChange}
                />
                <Message
                    error
                    header={error.header}
                    content={error.content}
                />
                <Button color='teal' fluid size='large' loading={isSubmiting}>
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

export default observer(LoginForm) 

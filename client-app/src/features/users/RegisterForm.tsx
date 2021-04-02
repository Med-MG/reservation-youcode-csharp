import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link  } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../app/stores/store';

const RegisterForm = () => {

    const {userStore} = useStore();
  
    const initialState = {
        displayName: '',
        username:'',
        email: '',
        password: '',
    }

    const [RegisterForm, setRegisterForm] = useState(initialState)
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [error, setError] = useState({status: false, header: '', content: ''})
    const HandleSubmit = async () => {
        setIsSubmiting(true)
        try {
            await  userStore.register(RegisterForm)
            setIsSubmiting(false)
            setError({status: false, header: '', content: ''})
        } catch (error) {
            console.log(error);
            setError({status: true, header: 'Register failed' ,content: 'Incorrect username or password' })
            setIsSubmiting(false)
        }
        

    }
   

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setRegisterForm({...RegisterForm, [name]: value})
    }

    return (
        <Grid textAlign='center' style={{ height: '100%'}} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450, width: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                Sign-up to your account
            </Header>
            <Form onSubmit={HandleSubmit} size='large' error={error.status} autoComplete={false} >
                <Segment stacked>
                <Form.Input fluid icon='mail' iconPosition='left' name="email" placeholder='E-mail address' onChange={handleInputChange} />
                <Form.Input fluid icon='address card' iconPosition='left' name="displayName" placeholder='display name' onChange={handleInputChange} />
                <Form.Input fluid icon='user' iconPosition='left' name="username" placeholder='username' onChange={handleInputChange} />
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
                    Register
                </Button>
                </Segment>
            </Form>
            <Message>
                Existing user? <Link to="/Login">Login</Link>
            </Message>
            </Grid.Column>
        </Grid>
    )
}

export default observer(RegisterForm) 

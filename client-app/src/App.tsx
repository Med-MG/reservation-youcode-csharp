import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [Reservations, setReservations] = useState([])

  useEffect(() => { 
    axios.get("http://localhost:5000/api/Reservations").then(response => {
      console.log(response.data)
      setReservations(response.data)
    })
  }, [])

  return (
    <div >
      <Header as='h2' icon='users' content='Reservations' />
        <List>
            {Reservations.map((reservation: any) => 
            <List.Item key={reservation.id} >{reservation.title}</List.Item>
          )}
        </List>

 
    </div>
  );
}

export default App;

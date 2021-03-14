import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Reservation } from '../models/Reservation';

function App() {
  const [Reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => { 
    axios.get<Reservation[]>("http://localhost:5000/api/Reservations").then(response => {
      console.log(response.data)
      setReservations(response.data)
    })
  }, [])

  return (
    <div >
      <Header as='h2' icon='users' content='Reservations' />
        <List>
            {Reservations.map( reservation => 
            <List.Item key={reservation.id} >
              {reservation.title}
            </List.Item>
          )}
        </List>

 
    </div>
  );
}

export default App;

import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Reservation } from '../models/Reservation';
import NavBar from './NavBar';
import ReservationDashboard from '../../features/reservations/dashboard/ReservationDashboard';

function App() {
  const [Reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => { 
    axios.get<Reservation[]>("http://localhost:5000/api/Reservations").then(response => {
      console.log(response.data)
      setReservations(response.data)
    })
  }, [])

  return (
    <Fragment>
        <NavBar/>
       <Container style={{marginTop: '7em'}}>
          <ReservationDashboard reservations={Reservations}/>
       </Container>
         
    </Fragment>
  );
}

export default App;

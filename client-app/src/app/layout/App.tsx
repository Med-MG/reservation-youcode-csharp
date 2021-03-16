import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Reservation } from '../models/Reservation';
import NavBar from './NavBar';
import ReservationDashboard from '../../features/reservations/dashboard/ReservationDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
function App() {
  const [Reservations, setReservations] = useState<Reservation[]>([])
  const [SelectedReservation, setSelectedReservation] = useState<Reservation | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => { 
    // axios.get<Reservation[]>("http://localhost:5000/api/Reservations").then(response => {
    //   console.log(response.data)
    //   setReservations(response.data)
    // })

    agent.Reservations.list().then(response => {
      setReservations(response);
    })
  }, [])

  const handleSelectReservation = (id: string) =>  {
      setSelectedReservation(Reservations.find(x => x.id === id));
  }

  const handleCancelSelectReservation = () => {
    setSelectedReservation(undefined);
  }

  const handleFormOpen = (id?: string) => {
    id ? handleSelectReservation(id) : handleCancelSelectReservation();
    setEditMode(true);
  }

  const handleFormCLose = () => {
    setEditMode(false);
  }

  const handleCreateOrRditReservation = (reservation: Reservation) => {
      reservation.id ? setReservations([...Reservations.filter(x => x.id !== reservation.id), reservation] ) : setReservations([...Reservations, {...reservation, id: uuid() }]);
      setEditMode(false);
      setSelectedReservation(reservation);
  }

  const handleDeleteReservation = (id: string) => {
      setReservations([...Reservations.filter(x => x.id !== id)])
  }

  return (
    <Fragment>
        <NavBar openForm={handleFormOpen}/>
       <Container style={{marginTop: '7em'}}>
          <ReservationDashboard 
          CancelSelectedReservation={handleCancelSelectReservation} 
          SelectedReservation={SelectedReservation} 
          selectReservation={handleSelectReservation} 
          reservations={Reservations}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormCLose}
          createOrEdit={handleCreateOrRditReservation}
          deleteReservation={handleDeleteReservation}
          />
       </Container>
         
    </Fragment>
  );
}

export default App;

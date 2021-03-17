import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Reservation } from '../models/Reservation';
import NavBar from './NavBar';
import ReservationDashboard from '../../features/reservations/dashboard/ReservationDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
function App() {
  const [Reservations, setReservations] = useState<Reservation[]>([])
  const [SelectedReservation, setSelectedReservation] = useState<Reservation | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)
  const [Loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  useEffect(() => { 
    // axios.get<Reservation[]>("http://localhost:5000/api/Reservations").then(response => {
    //   console.log(response.data)
    //   setReservations(response.data)
    // })

    agent.Reservations.list().then(response => {
      let Reservations : Reservation[] = [];
      response.forEach(el => {
        el.date = el.date.split('T')[0];
        Reservations.push(el);
      })
      setReservations(Reservations);
      setLoading(false)
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
    setSubmitting(true);
    if(reservation.id){
      agent.Reservations.update(reservation).then(() => {
        setReservations([...Reservations.filter(x => x.id !== reservation.id), reservation])
        setSelectedReservation(reservation);
        setEditMode(false);
        setSubmitting(false); 
      })

    } else {
      reservation.id = uuid();
      agent.Reservations.create(reservation).then(() => {
        setReservations([...Reservations, reservation]);
        setSelectedReservation(reservation);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }

  const handleDeleteReservation = (id: string) => {
      setReservations([...Reservations.filter(x => x.id !== id)])
  }

  if(Loading) return <LoadingComponent content='Loading content'/>

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
          submitting={submitting}
          />
       </Container>
         
    </Fragment>
  );
}

export default App;

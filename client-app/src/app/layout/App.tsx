import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Reservation } from '../models/Reservation';
import NavBar from './NavBar';
import ReservationDashboard from '../../features/reservations/dashboard/ReservationDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
function App() {
  const {reservationStore} = useStore();


  const [Reservations, setReservations] = useState<Reservation[]>([])
  const [SelectedReservation, setSelectedReservation] = useState<Reservation | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => { 
      reservationStore.loadingReservations();
  }, [reservationStore])



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
      setSubmitting(true);
      agent.Reservations.delete(id).then(() => {
        setReservations([...Reservations.filter(x => x.id !== id)])
        setSubmitting(false);
      })
  }

  if(reservationStore.loadingInitial) return <LoadingComponent content='Loading content'/>

  return (
    <Fragment>
        <NavBar />
       <Container style={{marginTop: '7em'}}>
          <ReservationDashboard 
          reservations={reservationStore.reservations}
          createOrEdit={handleCreateOrRditReservation}
          deleteReservation={handleDeleteReservation}
          submitting={submitting}
          />
       </Container>
         
    </Fragment>
  );
}

export default observer(App);

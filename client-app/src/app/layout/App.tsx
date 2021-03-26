import React, { Fragment, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ReservationDashboard from '../../features/reservations/dashboard/ReservationDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
function App() {
  const {reservationStore} = useStore();


  useEffect(() => { 
      reservationStore.loadingReservations();
  }, [reservationStore])



  if(reservationStore.loadingInitial) return <LoadingComponent content='Loading content'/>

  return (
    <Fragment>
        <NavBar />
       <Container style={{marginTop: '7em'}}>
          <ReservationDashboard  />
       </Container>
         
    </Fragment>
  );
}

export default observer(App);

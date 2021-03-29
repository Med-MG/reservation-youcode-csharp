import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ReservationDashboard from '../../features/reservations/dashboard/ReservationDashboard';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ReservationForm from '../../features/reservations/form/ReservationForm';
import LoginForm from '../../features/users/LoginForm';
function App() {
  // const {reservationStore} = useStore();


  // useEffect(() => { 
  //     reservationStore.loadingReservations();
  // }, [reservationStore])



  // if(reservationStore.loadingInitial) return <LoadingComponent content='Loading content'/>

  return (
    <Fragment>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/Login' component={LoginForm} />
      <Route
          path={'/(.+)'}
          render={() => (
            <>
              <NavBar />
              <Container style={{marginTop: '7em'}}>
                  {/* <ReservationDashboard  /> */}
                  
                  <Route exact path='/reservations' component={ReservationDashboard} />
                  <Route exact path='/CreateReservation' component={ReservationForm} />
                  
              </Container>
            </>
          )}
       />

         
    </Fragment>
  );
}

export default observer(App);

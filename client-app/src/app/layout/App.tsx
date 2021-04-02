import React, { Fragment, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ReservationDashboard from '../../features/reservations/dashboard/ReservationDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ReservationForm from '../../features/reservations/form/ReservationForm';
import LoginForm from '../../features/users/LoginForm';
import ModalContainer from '../common/modals/ModalContainer';
import CommonStore from './../stores/CommonStore';
import { useStore } from '../stores/store';
import LoadingComponent from './LoadingComponent';
function App() {
  const {userStore, commonStore} = useStore();


  useEffect(() => { 
      if(commonStore.token) {
          userStore.getUser().finally(() => commonStore.setAppLoaded());
      }else {
        commonStore.setAppLoaded();
      }
  }, [commonStore, userStore])

  if(!commonStore.appLoaded) return <LoadingComponent content='loading app ...' />

  // if(reservationStore.loadingInitial) return <LoadingComponent content='Loading content'/>

  return (
    <Fragment>
      <ModalContainer/>
      <Route exact path='/' component={HomePage} />
      <Route
          path={'/(.+)'}
          render={() => (
            <>
              <NavBar />
              <Container style={{marginTop: '7em'}}>
                  {/* <ReservationDashboard  /> */}
                  <Switch>
                      <Route exact path='/Login' component={LoginForm} />
                     
                      <Route exact path='/reservations' component={ReservationDashboard} />
                      <Route exact path='/CreateReservation' component={ReservationForm} />
                  </Switch>

                  
              </Container>
            </>
          )}
       />

         
    </Fragment>
  );
}

export default observer(App);

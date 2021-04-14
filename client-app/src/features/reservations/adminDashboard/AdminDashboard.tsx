import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { Grid, GridColumn} from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
// import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import FilterReservation from '../../filter/FilterReservation';
import AdminReservationList from './AdminReservationList';



const AdminDashboard = () => {
    const {reservationStore} = useStore();
    const {loadingReservations} = reservationStore;
   

    useEffect(() => { 
         loadingReservations();
    }, [loadingReservations])


    if(reservationStore.loadingInitial) return <LoadingComponent content='Loading content'/>;

  

    return (
        <Grid>
            <GridColumn width="10" >
                <AdminReservationList />
            </GridColumn>
            <GridColumn width="6" >
                {/* <Segment>
                    <Header as='h2'>Filter Reservations</Header>
                    <Button color='green' onClick={() => setFilterMode('approved') } >Approved </Button>
                    <Button color='orange' onClick={() => setFilterMode('denied')} >Denied </Button>
                    <Button color='grey' onClick={() => setFilterMode('pending')}>Pending </Button>
                </Segment> */}
                <FilterReservation />
                
            </GridColumn>
      </Grid>
    )
}

export default observer(AdminDashboard) 

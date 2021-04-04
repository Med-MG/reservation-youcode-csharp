import React from 'react'
import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom";
import { useStore } from '../stores/store'

interface Props extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}


const PrivateAdminRoute = ({component: Component, ...rest}: Props) => {
    const {commonStore: {isAdmin}, userStore: {isLoggedIn}} = useStore();
    return (
        <Route 
            {...rest}
            render={(props) => isAdmin && isLoggedIn ? <Component {...props} /> : <Redirect to='/RestrictedAccess' />}
        />
    )
}

export default PrivateAdminRoute

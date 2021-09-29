import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ component: Component, render }: any) {
    const authenticated = window.localStorage.getItem('jwt') ? true : false;
    return (
        <Route
            render={props =>
                authenticated ? (
                    render ? (
                        render(props)
                    ) : (
                        <Component {...props} />
                    )
                ) : (
                    <Redirect to={{ pathname: '/user/login', state: { from: props.location } }} />
                )
            }
        />
    );
}

export default AuthRoute;

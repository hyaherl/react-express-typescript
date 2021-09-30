import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ component: Component, render, ...rest }: any) {
    const authenticated = window.localStorage.getItem('jwt') ? true : false;
    return (
        <Route
            {...rest}
            render={props =>
                authenticated ? (
                    render ? (
                        render(props)
                    ) : (
                        <Component {...props} />
                    )
                ) : (
                    <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
                )
            }
        />
    );
}

export default AuthRoute;

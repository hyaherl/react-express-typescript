import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './Auth';

function AuthRoute({ component: Component, render, ...rest }: any) {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
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

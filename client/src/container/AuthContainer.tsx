import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import LoginContainer from './auth/LoginContainer';
import SignUpContainer from './auth/SignUpContainer';

function AuthContainer({ match, setToken }: any) {
    const history = useHistory();
    const linkPage = (path: string) => {
        history.push(path);
    };

    return (
        <div>
            <Route
                path={`${match.path}/login`}
                exact
                render={props => <LoginContainer {...props} setToken={setToken} linkPage={linkPage} />}
            />
            <Route
                path={`${match.path}/signUp`}
                exact
                render={props => <SignUpContainer {...props} linkPage={linkPage} />}
            />
        </div>
    );
}

export default AuthContainer;

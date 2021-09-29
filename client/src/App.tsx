import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import AuthRoute from './util/AuthRoute';
import Home from './container/Home';
import NavigationBar from './components/layout/NavigationBar';
import LoginContainer from './container/user/LoginContainer';
import SignUpContainer from './container/user/SignUpContainer';
import ProfileContainer from './container/user/ProfileContainer';
import { Container } from '@mui/material';
import { User } from './interface';

function App() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const jwt = window.localStorage.getItem('jwt');
        if (jwt) {
            const token: User = jwtDecode(jwt);
            setUser(token);
        }
    }, []);

    return (
        <div className="App">
            <Router>
                <NavigationBar user={user} setUser={setUser} />
                <Container>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/logIn" exact render={() => <LoginContainer setUser={setUser} />} />
                        <Route path="/signUp" exact component={SignUpContainer} />
                        <AuthRoute
                            authenticated={user}
                            path="/profile"
                            render={() => <ProfileContainer user={user} />}
                        />
                    </Switch>
                </Container>
            </Router>
        </div>
    );
}

export default App;

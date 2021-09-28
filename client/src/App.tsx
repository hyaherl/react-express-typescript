import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import './App.css';
import AuthRoute from './util/AuthRoute';
import axios from './util/axios';
import Home from './container/Home';
import NavigationBar from './components/layout/NavigationBar';
import LoginContainer from './container/user/LoginContainer';
import SignUpContainer from './container/user/SignUpContainer';
import ProfileContainer from './container/user/ProfileContainer';

interface User {
    email: string;
    nickname: string;
    exp: number;
    iat: number;
}

function App() {
    const [user, setUser] = useState<User | null>(null);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const jwt = window.localStorage.getItem('jwt');
        if (jwt) {
            const token: User = jwtDecode(jwt);
            setUser(token);
            setAuthenticated(true);
        }
    }, []);

    const login = (email: string, password: string) => {
        axios
            .post('/user/login', {
                email: email,
                password: password,
            })
            .then(res => {
                const jwt = res.data.token;
                window.localStorage.setItem('jwt', JSON.stringify(jwt));
                if (jwt) {
                    const token: User = jwtDecode(jwt);
                    setUser(token);
                    setAuthenticated(true);
                }
            });
    };

    const logout = () => {
        setUser(null);
        setAuthenticated(false);
        window.localStorage.removeItem('jwt');
    };

    return (
        <div className="App">
            <Router>
                <NavigationBar user={user} logout={logout} />
                <Container>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/logIn" exact render={() => <LoginContainer login={login} />} />
                        <Route path="/signUp" exact component={SignUpContainer} />
                        <AuthRoute
                            authenticated={authenticated}
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

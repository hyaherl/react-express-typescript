import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import './App.css';
import NavigationBar from './components/layout/NavigationBar';
import Home from './container/Home';
import LoginContainer from './container/user/LoginContainer';
import SignUpContainer from './container/user/SignUpContainer';

interface User {
    email: string;
    nickname: string;
    exp: number;
    iat: number;
}

function App() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const jwt = window.localStorage.getItem('jwt');
        if (jwt) {
            const token: User = jwtDecode(jwt);
            setUser(token);
        }
    }, []);

    const logout = () => {
        setUser(null);
        window.localStorage.removeItem('jwt');
    };

    return (
        <div className="App">
            <Router>
                <NavigationBar user={user} logout={logout} />
                <Container>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/logIn" exact render={() => <LoginContainer setUser={setUser} />} />
                        <Route path="/signUp" exact component={SignUpContainer} />
                    </Switch>
                </Container>
            </Router>
        </div>
    );
}

export default App;

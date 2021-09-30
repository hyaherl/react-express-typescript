import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './container/Home';
import NavigationBar from './components/layout/NavigationBar';
import { Container } from '@mui/material';
import UserContainer from './container/UserContainer';
import Page404 from './container/Page404';
import AuthContainer from './container/AuthContainer';
import BoardContainer from './container/BoardContainer';

function App() {
    const [token, setToken] = useState<string | null>(window.localStorage.getItem('jwt') || null);

    return (
        <div className="App">
            <Router>
                <NavigationBar token={token} setToken={setToken} />
                <Container>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/auth" render={props => <AuthContainer {...props} setToken={setToken} />} />
                        <Route path="/user" render={props => <UserContainer {...props} token={token} />} />
                        <Route path="/board" render={props => <BoardContainer {...props} />} />
                        <Route path="*">
                            <Page404 />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </div>
    );
}

export default App;

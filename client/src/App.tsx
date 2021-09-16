import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/layout/NavigationBar';
import Home from './container/Home';
import LogInContainer from './container/user/LogInContainer';
import SignUpContainer from './container/user/SignUpContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/logIn" exact component={LogInContainer} />
            <Route path="/signUp" exact component={SignUpContainer} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;

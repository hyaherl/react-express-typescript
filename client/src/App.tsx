import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/layout/NavigationBar';
import Home from './container/Home';
import User from './container/user/User';
import axios from './util/axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('/hello?hello=World').then(res => {
      setData(res.data.message);
    });
  };

  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user" exact component={User} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;

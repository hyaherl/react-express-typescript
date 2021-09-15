import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from './util/axios';

function App() {
	const [data, setData] = useState("");
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		axios.get('/hello?hello=world').then((res) => {
			setData(res.data.message);
		})
	};

	const signUp = () => {
		axios.post('/user', {
			id: id,
			password: password
		}).then((res) => {
			console.log(res.data);
		})
	};

	return (
		<div className="App">
			<h1>{data}</h1>
			<input type="text" placeholder="id" onChange={e => setId(e.target.value)}></input>
			<input type="text" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
			<button onClick={signUp}>signUp</button>
		</div>
	);
}

export default App;

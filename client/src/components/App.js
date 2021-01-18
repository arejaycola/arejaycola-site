import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Navbar from './Navbar';

const App = () => {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Main}></Route>
				</Switch>
			</BrowserRouter>
		</>
	);
};
export default App;

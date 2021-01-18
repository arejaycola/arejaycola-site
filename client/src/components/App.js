import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Navbar from './Navbar';
import Natours from './pages/Natours';

const App = () => {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Main}></Route>
					<Route path="/natours" exact component={Natours}></Route>
				</Switch>
			</BrowserRouter>
		</>
	);
};
export default App;

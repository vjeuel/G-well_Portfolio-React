import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route path='/' exact component={withRouter(About)} />
					<Route path='/portfolio' component={withRouter(Portfolio)} />
					<Route path='/contact' component={withRouter(Contact)} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

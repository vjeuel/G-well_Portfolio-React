import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
// import Home from './components/Home';
// import NavbarMobile from './components/NavbarMobile - Delete';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				{/* <NavbarMobile /> */}
				<Switch>
					<Route path='/' exact component={withRouter(About)} />
					<Route path='/portfolio' component={withRouter(Portfolio)} />
					<Route path='/contact' component={withRouter(Contact)} />
					{/* <Route path='/home' component={withRouter(Home)} /> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;

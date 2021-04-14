import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import PortfolioWeb from './components/pages/PortfolioWeb';
import PortfolioGraphic from './components/pages/PortfolioGraphic';
import Skills from './components/pages/Skills';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route path='/' exact component={withRouter(About)} />
					<Route path='/portfolio' component={withRouter(Portfolio)} />
					<Route path='/portfolio-web' component={withRouter(PortfolioWeb)} />
					<Route path='/portfolio-graphic' component={withRouter(PortfolioGraphic)} />
					<Route path='/skills' component={withRouter(Skills)} />
					<Route path='/contact' component={withRouter(Contact)} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

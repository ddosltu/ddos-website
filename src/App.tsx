import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';

export default function App() {
	const navLinks = [
		{ name: 'Home', to: '/' },
		{ name: 'Contact', to: '/contact' },
		{
			name: 'About',
			to: '/about',
			dropdown: [
				{ name: 'Association', to: '/info' },
				{ name: 'Board', to: '/board' },
			],
		},
	];

	return (
		<Router>
			<Navbar links={navLinks} />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contact" component={Contact} />
			</Switch>
		</Router>
	);
}

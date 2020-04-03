import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Compose from './views/Compose';
import Details from './views/Details';
import Editing from './views/Editing';

const App: React.FC<AppProps> = props => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/compose">
					<Compose />
				</Route>
				<Route exact path="/details/:chirpid">
					<Details />
				</Route>
				<Route exact path="/editing/:chirpid">
					<Editing />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;

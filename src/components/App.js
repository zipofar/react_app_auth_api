import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../containers/Menu';
import Login from '../containers/Login';
import PrivateRoute from '../containers/PrivateRoute';
import Profile from './Profile';
import News from './News';
import Main from './Main';
import NotFound from './NotFound';

export default class App extends React.Component
{
	render() {
		return(
			<div>
				<Menu />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/news" component={News} />
					<PrivateRoute path="/profile" component={Profile} />
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../containers/Menu';
import Login from '../containers/Login';
import PrivateRoute from '../containers/PrivateRoute';
import Profile from '../containers/Profile';
import News from '../containers/News';
import Main from './Main';
import RegistrationForm from '../containers/RegistrationForm';
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
					<Route exact path="/registration" component={RegistrationForm} />
					<PrivateRoute path="/profile" component={Profile} />
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}

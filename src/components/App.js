import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Login from '../containers/Login';
import Profile from './Profile';
import News from './News';
import Main from './Main';

export default class App extends React.Component
{
	render() {
		return(
			<div>
				<Footer />
				<Route exact path="/" component={Main} />
				<Route exact path="/main" component={Main} />
				<Route exact path="/login" render={() => (
					this.props.isLogin ? <Redirect to="/profile" /> : <Login />
				)} />
				<Route exact path="/news" component={News} />
				<Route exact path="/profile" render={() => (
					this.props.isLogin ? <Profile /> : <Redirect to="/login" />		
				)} />
			</div>
		);
	}
}

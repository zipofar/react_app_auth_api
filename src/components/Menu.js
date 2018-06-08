import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<header>
							<Link to={'/'} className="button">На главную</Link>
							<Link to={'/news'} className="button">Новости</Link>
							<Link to={'/profile'}	className="button">Профиль</Link>
							<Link to={'/404'}	className="button">404</Link>
							<Link to={'/login'}	className="button">Login</Link>
						</header>
					</div>
				</div>
			</div>
		);
	}
}

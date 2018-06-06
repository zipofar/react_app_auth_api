import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends React.Component {
	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<header>
							<NavLink to={'/main'}	activeStyle={ {color:'black'} } className="button">На главную</NavLink>
							<NavLink to={'/news'}	activeStyle={ {color:'black'} } className="button">Новости</NavLink>
							<NavLink to={'/profile'}	activeStyle={ {color:'black'} } className="button">Профиль</NavLink>
						</header>
					</div>
				</div>
			</div>
		);
	}
}

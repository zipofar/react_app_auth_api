import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = createStore(rootReducer);

ReactDOM.render(
		<Provider store={ store }>
			<Router>
				<Route path="/" component={App} />
			</Router>
		</Provider>, 
		document.getElementById('root')
);

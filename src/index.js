import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();

const store = createStore(rootReducer, compose(applyMiddleware(thunk), devtoolMiddleware));

ReactDOM.render(
		<Provider store={ store }>
			<Router>
				<Route path="/" component={App} />
			</Router>
		</Provider>, 
		document.getElementById('root')
);

import { connect } from 'react-redux';
import Login from '../components/Login';
import * as actions from '../actions';
import { removeNetErrors } from '../actions/helpers/handlerErrors';

const mapStateToProps = state => {
	return {
		isLogin: state.isLogin,
        stateProcessLogin: state.stateProcessLogin,
        networkErrors: state.networkErrors,
	};
};

const mapDispatchToProps = {
	...actions,
	removeNetErrors,
};

const container = connect(mapStateToProps, mapDispatchToProps)(Login);

export default container;

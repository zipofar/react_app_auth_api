import { connect } from 'react-redux';
import Login from '../components/Login';
import * as actions from '../actions';

const mapStateToProps = state => {
	return {
		isLogin: state.isLogin,
        stateProcessLogin: state.stateProcessLogin,
        networkErrors: state.networkErrors,
	};
};

const container = connect(mapStateToProps, actions)(Login);

export default container;

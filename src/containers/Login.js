import { connect } from 'react-redux';
import Login from '../components/Login';
import { logIn } from '../actions';

const mapStateToProps = state => {
	return {
		isLogin: state.isLogin,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logIn: () => dispatch(logIn()),
	};
};

const container = connect(mapStateToProps, mapDispatchToProps)(Login);

export default container;

import { connect } from 'react-redux';
import RegistrationForm from '../components/RegistrationForm';
import * as actions from '../actions';

const mapStateToProps = state => {
	return {
		isLogin: state.isLogin,
        authErrors: state.authErrors,
        stateProcessRegister: state.stateProcessRegister,
	};
};

const container = connect(mapStateToProps, actions)(RegistrationForm);

export default container;

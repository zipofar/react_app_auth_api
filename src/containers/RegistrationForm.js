import { connect } from 'react-redux';
import RegistrationForm from '../components/RegistrationForm';
import * as actions from '../actions';

const mapStateToProps = state => {
	return {
		isLogin: state.isLogin,
        networkErrors: state.networkErrors,
        stateProcessRegister: state.stateProcessRegister,
	};
};

const container = connect(mapStateToProps, actions)(RegistrationForm);

export default container;

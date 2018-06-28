import { connect } from 'react-redux';
import RegistrationForm from '../components/RegistrationForm';
import * as actions from '../actions';
import { removeNetErrors } from '../actions/helpers/handlerErrors';

const mapStateToProps = state => {
	return {
		isLogin: state.isLogin,
        networkErrors: state.networkErrors,
        stateProcessRegister: state.stateProcessRegister,
	};
};

const mapDispatchToProps = {
    ...actions,
    removeNetErrors,
};

const container = connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

export default container;

import { connect } from 'react-redux';
import ProfileEditForm from '../components/ProfileEditForm';
import * as actions from '../actions/profile';

const mapStateToProps = (state) => {
   return {
       initialValues: state.profile,
       processUpdateProfile: state.processUpdateProfile,
   };
};

export default connect(mapStateToProps, actions)(ProfileEditForm);
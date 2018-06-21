import { connect } from 'react-redux';
import ProfileEditForm from '../components/ProfileEditForm';
import * as actions from '../actions/profile';
import * as actionsCountries from '../actions/countries';

const mapStateToProps = (state) => {
   return {
       initialValues: state.profile,
       enableReinitialize: true,
       processUpdateProfile: state.processUpdateProfile,
       networkErrors: state.networkErrors,
       profile: state.profile,
       processLoadProfile: state.processLoadProfile,
       countries: state.countries,
   };
};

const mapDispatchToProps = {
    ...actions,
    ...actionsCountries,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditForm);
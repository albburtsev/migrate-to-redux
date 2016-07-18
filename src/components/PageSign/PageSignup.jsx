import {PATH_SIGNUP} from 'paths';
import {connect} from 'react-redux';

import PageSignPure from './PageSignPure.jsx';

import * as userActions from 'ducks/userDuck';
import * as formsActions from 'ducks/formsDuck';

export default connect(
    ({forms: {signup: {login, password}}, user: {requestSignup: request}}) => ({
        login,
        password,
        request,
        type: PATH_SIGNUP
    }),
    (dispatch) => ({
        onChange(name, {target: {value}}) {
            dispatch(formsActions.updateValue(`signup.${name}`, value));
        },
        onSubmit(login, password, e) {
            e.preventDefault();
            dispatch(userActions.requestSignupSend(login, password));
        }
    })
)(PageSignPure);

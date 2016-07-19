import {PATH_SIGNIN} from 'paths';
import {connect} from 'react-redux';

import PageSignPure from './PageSignPure.jsx';

import * as userActions from 'ducks/userDuck';
import * as formsActions from 'ducks/formsDuck';

export default connect(
    ({forms: {signin: {login, password}}, user: {requestSignin: request}}) => ({
        login,
        password,
        request,
        type: PATH_SIGNIN
    }),
    (dispatch) => ({
        onChange(name, {target: {value}}) {
            dispatch(formsActions.updateValue(`signin.${name}`, value));
        },
        onSubmit(login, password, e) {
            dispatch(userActions.requestSigninSend(login, password));
            e.preventDefault();
        }
    })
)(PageSignPure);

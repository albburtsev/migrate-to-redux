import {PATH_SIGNUP} from 'paths';
import {connect} from 'react-redux';

import PageSignPure from './PageSignPure.jsx';
import * as formsActions from 'ducks/formsDuck';

export default connect(
    ({forms: {signup: {login, password}}}) => ({
        login,
        password,
        type: PATH_SIGNUP
    }),
    (dispatch) => ({
        onChange(name, {target: {value}}) {
            dispatch(formsActions.updateValue(`signup.${name}`, value));
        }
    })
)(PageSignPure);

import {PATH_SIGNIN} from 'paths';
import {connect} from 'react-redux';

import PageSignPure from './PageSignPure.jsx';
import * as formsActions from 'ducks/formsDuck';

export default connect(
    ({forms: {signin: {login, password}}}) => ({
        login,
        password,
        type: PATH_SIGNIN
    }),
    (dispatch) => ({
        onChange(name, {target: {value}}) {
            dispatch(formsActions.updateValue(`signin.${name}`, value));
        }
    })
)(PageSignPure);

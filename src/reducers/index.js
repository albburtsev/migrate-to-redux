import {combineReducers} from 'redux';

import user from 'ducks/userDuck';
import forms from 'ducks/formsDuck';

export default combineReducers({
    user,
    forms
});

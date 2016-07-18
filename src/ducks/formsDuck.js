import schema from 'reducers/schema';
import immutable from 'seamless-immutable';

const FORMS_UPDATE_VALUE = 'FORMS_UPDATE_VALUE';

export const updateValue = (path, value) =>
    ({type: FORMS_UPDATE_VALUE, path, value});

export default (state = immutable(schema.forms), {type, path, value}) => {
    if (type === FORMS_UPDATE_VALUE) {
        return state.setIn(path.split('.'), value);
    }

    return state;
};

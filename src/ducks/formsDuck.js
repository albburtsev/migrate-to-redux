import schema from 'reducers/schema';
import immutable from 'seamless-immutable';

export default (state = immutable(schema.forms)) =>
    state;

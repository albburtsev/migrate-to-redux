import schema from 'reducers/schema';
import FetchPlease from 'fetch-please';
import immutable from 'seamless-immutable';

let rest = new FetchPlease('/api/');

const SIGNIN_REQEUST_SEND = 'SIGNIN_REQEUST_SEND';
const SIGNIN_REQEUST_RECEIVE = 'SIGNIN_REQEUST_RECEIVE';
const SIGNIN_REQEUST_FAIL = 'SIGNIN_REQEUST_FAIL';

export const requestSigninFail = (errors) =>
    ({type: SIGNIN_REQEUST_FAIL, payload: {errors}});

export const requestSigninReceive = (json) =>
    ({type: SIGNIN_REQEUST_RECEIVE, payload: {json}});

export const requestSigninSend = (data) =>
    (dispatch) => {
        dispatch({type: SIGNIN_REQEUST_SEND, payload: {data}});

        return rest.post('signin', data)
            .then((json) => {
                let {errors} = json;

                if (errors) {
                    dispatch(requestSigninFail(errors));
                } else {
                    dispatch(requestSigninReceive(json));
                }
            })
            .catch((errors) => {
                dispatch(requestSigninFail(errors));
            });
    };

const requestState = (changes = {}) =>
    Object.assign({}, {
        isLoading: false,
        isSuccess: false,
        errors: null
    }, changes);

export default (state = immutable(schema.user), action) => {
    switch (action.type) {
        case SIGNIN_REQEUST_SEND:
            return state.set('requestSignin', requestState({isLoading: true}));

        case SIGNIN_REQEUST_RECEIVE:
            return state.set('requestSignin', requestState({isSuccess: true}));

        case SIGNIN_REQEUST_FAIL:
            return state.set('requestSignin', requestState({errors: action.payload.errors}));
    }

    return state;
};

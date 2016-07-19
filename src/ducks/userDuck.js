import schema from 'reducers/schema';
import FetchPlease from 'fetch-please';
import immutable from 'seamless-immutable';

let rest = new FetchPlease('/api/');

const SIGNIN_REQEUST_SEND = 'SIGNIN_REQEUST_SEND';
const SIGNIN_REQEUST_RECEIVE = 'SIGNIN_REQEUST_RECEIVE';
const SIGNIN_REQEUST_FAIL = 'SIGNIN_REQEUST_FAIL';

export const makeRequestActionCreators = ({
    types: [sendType, receiveType, errorType],
    endpoint
}) => ({
    send: (...args) =>
        (dispatch) => {
            dispatch({type: sendType});
            return endpoint(...args)
                .then((json) => {
                    let {errors} = json;

                    if (errors) {
                        dispatch({type: errorType, payload: {errors}});
                    } else {
                        dispatch({type: receiveType, payload: {json}});
                    }
                })
                .catch((errors) => {
                    dispatch({type: errorType, payload: {errors}});
                });
        },

    receive: (json) =>
        ({type: receiveType, payload: {json}}),

    fail: (errors) =>
        ({type: errorType, payload: {errors}})
});

let {
    send: requestSigninSend,
    receive: requestSigninReceive,
    fail: requestSigninFail
} = makeRequestActionCreators({
    types: [SIGNIN_REQEUST_SEND, SIGNIN_REQEUST_RECEIVE, SIGNIN_REQEUST_FAIL],
    endpoint: (data) =>
        rest.post('signin', data)
});

export {
    requestSigninSend,
    requestSigninReceive,
    requestSigninFail
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

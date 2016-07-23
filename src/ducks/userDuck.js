import schema from 'reducers/schema';
import FetchPlease from 'fetch-please';
import immutable from 'seamless-immutable';
import createRequestDuck from 'ducks/helpers/createRequestDuck';

const FILTER_USER_SIGNIN = 'FILTER_USER_SIGNIN';
const FILTER_USER_SIGNUP = 'FILTER_USER_SIGNUP';

let rest = new FetchPlease('/api/');

let {
    send: requestSigninSend,
    receive: requestSigninReceive,
    fail: requestSigninFail,
    reducer: signinReducer
} = createRequestDuck({
    filter: FILTER_USER_SIGNIN,
    endpoint: (data) =>
        rest.post('signin', data)
});

export {
    requestSigninSend,
    requestSigninReceive,
    requestSigninFail
};

let {
    send: requestSignupSend,
    receive: requestSignupReceive,
    fail: requestSignupFail,
    reducer: signupReducer
} = createRequestDuck({
    filter: FILTER_USER_SIGNUP,
    endpoint: (data) =>
        rest.post('signup', data)
});

export {
    requestSignupSend,
    requestSignupReceive,
    requestSignupFail
};

export default (state = immutable(schema.user), action) => {
    switch (action.filter) {
        case FILTER_USER_SIGNIN:
            return state.set('requestSignin', signinReducer(state.requestSignin, action));
        case FILTER_USER_SIGNUP:
            return state.set('requestSignup', signupReducer(state.requestSignin, action));
    }

    return state;
};

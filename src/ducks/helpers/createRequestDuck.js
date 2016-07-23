const REQUEST_SEND = 'REQUEST_SEND';
const REQUEST_ERROR = 'REQUEST_ERROR';
const REQUEST_RECEIVE = 'REQUEST_RECEIVE';

const requestState = (changes = {}) =>
    Object.assign({}, {
        isLoading: false,
        isSuccess: false,
        errors: null
    }, changes);

const receive = (json, filter) =>
    ({type: REQUEST_RECEIVE, json, filter});

const fail = (errors, filter) =>
    ({type: REQUEST_ERROR, errors, filter});

const send = (promise, filter) =>
    (dispatch) => {
        dispatch({type: REQUEST_SEND, filter});

        return promise
            .then((json) => {
                let {errors} = json;

                if (errors) {
                    dispatch(fail(errors, filter));
                } else {
                    dispatch(receive(json, filter));
                }

                return json;
            })
            .catch((errors) => {
                dispatch(fail(errors, filter));
            });
    };

export default ({
    endpoint,
    filter
}) => ({
    send: (...args) =>
        send(endpoint(...args), filter),

    receive: (json) =>
        receive(json, filter),

    fail: (errors) =>
        fail(errors, filter),

    reducer: (state = requestState(), action) => {
        if (action.filter === filter) {
            switch (action.type) {
                case REQUEST_SEND:
                    return requestState({isLoading: true});

                case REQUEST_RECEIVE:
                    return requestState({isSuccess: true});

                case REQUEST_ERROR:
                    return requestState({errors: action.payload.errors});
            }

            return state;
        }

        return state;
    }
});

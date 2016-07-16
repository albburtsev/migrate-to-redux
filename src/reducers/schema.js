const requestSchema = {
    isLoading: false,
    isSuccess: false,
    errors: null
};

export default {
    user: {
        requestSignin: requestSchema,
        requestSignup: requestSchema
    },
    forms: {
        signin: {
            login: '',
            password: ''
        },
        signup: {
            login: '',
            password: ''
        }
    }
};

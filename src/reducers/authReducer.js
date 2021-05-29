import { LOG_IN, LOG_OUT, SIGN_UP, SET_LOADING } from "../actions/types";

const initialState = {
    authenticated: false,
    token: null,
    message: null,
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case LOG_IN:
            return {
                ...state,
                authenticated: true,
                token: action.payload,
                loading: false,
            };
        case LOG_OUT:
            return {
                ...state,
                authenticated: false,
                message: action.payload,
                token: null,
                loading: false,
            };
        case SIGN_UP:
            return {
                ...state,
                authenticated: true,
                token: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

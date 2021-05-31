import { SET_LOADING, SUBMIT, GET_SUBMISSIONS } from "../actions/types";

const initialState = {
    submissions: null,
    authenticated: false,
    loading: false,
    error: null,
    message: null,
};

export const submissionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_SUBMISSIONS:
            return {
                ...state,
                submissions: action.payload,
                loading: false,
            };
        case SUBMIT:
            return {
                ...state,
                message: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

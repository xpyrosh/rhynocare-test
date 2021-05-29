import { LOG_IN, LOG_OUT, SIGN_UP, SET_LOADING } from "./types";

import axios from "axios";

// login action
export const login = (credentials) => async (dispatch) => {
    try {
        setLoading();

        return await axios
            .post("/login", credentials)
            .then((res) => {
                // console.log(res.data);
                dispatch({
                    type: LOG_IN,
                    payload: res.data,
                });
            })
            .catch((err) => {
                console.error(err);
            });
    } catch (err) {
        console.error(err);
    }
};

// logout action
export const logout = () => async (dispatch) => {
    try {
        setLoading();
        dispatch({
            type: LOG_OUT,
            payload: { message: "Logged out successfully." },
        });
    } catch (err) {
        console.error(err);
    }
};

// sign up new user action
export const signup = (credentials) => async (dispatch) => {
    const { password, confirmPassword } = credentials;

    // add some validation in front end.. didn't validate in the cloud functions yet
    if (password !== confirmPassword) {
        return { message: "Unauthorized." };
    }

    try {
        setLoading();

        return axios
            .post("/signup", credentials)
            .then((res) => {
                console.log(res.data);

                dispatch({
                    type: SIGN_UP,
                    payload: res.data,
                });
            })
            .catch((err) => {
                console.error(err);
            });
    } catch (err) {
        console.error(err);
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};

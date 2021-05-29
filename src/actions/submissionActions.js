import { SET_LOADING, SUBMIT, GET_SUBMISSIONS } from "./types";
import axios from "axios";

export const getSubmissions = () => async (dispatch) => {
    try {
        setLoading();

        const res = axios
            .get("/submissions")
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.error(err);
            });

        dispatch({
            type: GET_SUBMISSIONS,
            payload: res,
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

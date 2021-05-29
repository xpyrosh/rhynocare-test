import { SET_LOADING, SUBMIT, GET_SUBMISSIONS } from "./types";
import axios from "axios";

export const getSubmissions = () => async (dispatch) => {
    try {
        setLoading();

        return axios
            .get("/submissions")
            .then((res) => {
                // console.log(res.data);

                dispatch({
                    type: GET_SUBMISSIONS,
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

import { LOG_IN, LOG_OUT, SIGN_UP, SET_LOADING } from "./types";

// login action
export const login = (credentials) => async (dispatch) => {
    try {
        setLoading();

        return axios
            .post("/login", credentials)
            .then((res) => {
                console.log(res.data);

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

    if (password !== confirmPassword) {
        return res.status(401).json({ message: "Unauthorized." });
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

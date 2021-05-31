import { combineReducers } from "redux";
import { submissionReducer } from "./submissionReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
    // root reducer: set all reducers here
    submission: submissionReducer,
    auth: authReducer,
});

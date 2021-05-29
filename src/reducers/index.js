import { combineReducers } from "redux";
import submissionReducer from "./submissionReducer";

export default combineReducers({
    // root reducer: set all reducers here
    submission: submissionReducer,
});

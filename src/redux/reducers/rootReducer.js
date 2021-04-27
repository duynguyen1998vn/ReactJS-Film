import { combineReducers } from "redux";
import filmReducer from "./filmReducer";

const rootReducer = combineReducers(
    {
        list:filmReducer,
    }
)

export default rootReducer;
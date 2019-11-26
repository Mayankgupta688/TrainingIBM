import { combineReducers } from "redux";
import employees from "./employees_reducers";

export const rootReducer = combineReducers({
    employees: employees
});


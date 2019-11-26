import { combineReducers } from "redux";
import employees from "./employee_reducer";
import leads from "./lead_reducer";

export const rootReducer = combineReducers({
    employees: employees,
    leads: leads
})
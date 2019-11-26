import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducers/index";

import EmployeeDetails from "./components/app"

var store = createStore(rootReducer);

ReactDOM.render((
    <Provider store={store}>
        <EmployeeDetails></EmployeeDetails>
    </Provider>
), document.getElementById("root"))
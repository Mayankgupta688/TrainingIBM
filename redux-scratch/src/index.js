import React from "react";
import ReactDOM from "react-dom";

import EmployeeDetails from "./components/EmployeeDetails";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { rootReducer } from "./reducers";

var store = createStore(rootReducer);

ReactDOM.render((
    <Provider store={store}>
        <EmployeeDetails></EmployeeDetails>
    </Provider>
), document.getElementById("root"))
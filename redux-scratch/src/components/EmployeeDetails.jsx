import React from 'react';

import {connect} from "react-redux";
import * as actions from "../actions/index";
import axios from 'axios';

class EmployeeDetails extends React.Component {
    constructor() {
        super();
        
    }

    componentDidMount() {
        axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then(res => {
            debugger;    
        this.props.getEmployees(res.data);

        setTimeout(() => {}, 5000)
        }, 5000) 
    }

    render() {
        return (
            <>
                {this.props.em && this.props.em.map((emp) => <div>Emp Name: {emp.name}</div>)}
            </>
        )
    }
}


var mapStateToProps = function(state) {
    return {
        em: state.employees
    }
}

export default connect(mapStateToProps, actions)(EmployeeDetails)
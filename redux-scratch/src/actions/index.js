export function getEmployees(employees) {
    debugger;
    return {
        type: "GET_EMPLOYEES",
        payload: employees
    }
}

export function deleteEmployee(empId) {
    return {
        type: "DELETE_EMPLOYEE",
        payload: empId
    }
}
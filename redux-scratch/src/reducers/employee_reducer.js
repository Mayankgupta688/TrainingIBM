export default function employees(state=null, action) {
    if(action.type == "GET_EMPLOYEES") {
        debugger;
        return action.payload
    } else if(action.type == "DELETE_EMPLOYEE") {
        debugger;
        return []
    } return state;
}
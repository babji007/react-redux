import ActionTypes from '../actions'

export default function EmployeeReducer (state = [],action){
switch(action.type) {
      case ActionTypes.ADD_EMPLOYEE:
        state = state.concat(action.employees);
        return state;
      case ActionTypes.DELETE_EMPLOYEE:
        state = state.filter((employee) => employee.id !== employee.id);
        return state;
        case 'FETCH_EMPLOYEE':
             
            return state;
        default:
            return state;
    }
}













// function employeeReducer(state =[], action) {
//     switch (action.type) {
//         case 'ADD_EMPLOYEE':
//             state = state.concat(action.employees);
//             return state;
//         case 'DELETE_EMPLOYEE':
//             state = state.filter((employee) => employee.id !== employee.id);
//             return state;
//         case 'FETCH_EMPLOYEE':
             
//             return state;
//         default:
//             return state;
//     }
// }

// export default employeeReducer;

const CounterTypes = {
    INCREASE_COUNT: 'INCREASE_COUNT',
    DECREASE_COUNT: 'DECREASE_COUNT'
    
    }
  

const EmployeeTypes = {
    ADD_EMPLOYEE: 'ADD_EMPLOYEE',
    DELETE_EMPLOYEE: 'DELETE_EMPLOYEE'
}
export default{
    ...CounterTypes,
    ...EmployeeTypes,
}
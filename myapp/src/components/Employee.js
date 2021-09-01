import React from 'react';
import { connect } from 'react-redux';
import EmployeeService from '../services/EmployeeService';

class Employee extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {
         id:0,
         name:'',
         salary:0,
         doj:new Date().toLocaleDateString() 
         };
    };
    handleInputChange=(e)=>{
        this.setState({
           [e.target.name]:e.target.value
        })
    }
  
  addEmployee = () => {
    this.props.dispatch({ type: 'ADD_EMPLOYEE' });
    EmployeeService.addEmployee(this.state)
    .then(response=>{
        this.props.history.push("/emplist");
    })
  }

  deleteEmployee = () => {
    this.props.dispatch({ type: 'DELETE_EMPLOYEE' });
  }

  render() {
  
    return (
      <div>
        <h2>Counter</h2>
        <div>
        <form  onSubmit={this.addEmployee}>
  
  
  <div className="form-group">
  <label>Employee Id</label>     
  <input defaultValue={this.state.id}  name="id"   onChange={this.handleInputChange} />
  </div>
  
  <div className="form-group">
  <label>Employee Name</label>     
  <input  defaultValue={this.state.name}  name="name" onChange={this.handleInputChange}/>
  </div>
  
  <div className="form-group">
  <label>Employee Salary </label>     
  <input defaultValue={this.state.salary} name="salary" onChange={this.handleInputChange}/>
  </div>

  <div className="form-group">
  <label>Employee DOJ </label>     
  <input defaultValue={this.state.doj} name="doj" onChange={this.handleInputChange}/>
  </div>

  
  <button type="submit" className="btn btn-primary"  >Add Employee</button>
  </form>

          {/* <button onClick={this.addEmployee}>addEmployee</button> */}
          {/* <h2>{this.props.count}</h2> */}
          {/* console.log({this.state.count}); */}
          {/* <button onClick={this.increment}>+</button> */}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    employees: state
  };
}

export default connect(mapStateToProps)(Employee)
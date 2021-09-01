import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, HashRouter,Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Store from './store/Store';
import { Provider } from 'react-redux';
// import {createStore} from 'redux';
import Counter from './components/Counter';
import counterReducer from './reducers/counterReducer';
import EmpList from './components/EmpList';
// import EmployeeTable from './components/EmployeeTable';
import NewEmployee from './components/NewEmployee';
import Counter1 from './components/Counter1';
import Employee from './components/Employee';
import listproduct from './components/ListProducts';
import AddProduct from './components/AddProduct';

// const store = createStore(counterReducer)

function App() {
  return (

    <Provider   store={Store}>
    <Router>
    <div>
    <Header/>
    {/* <Employee/> */}
    {/* <Counter1/>               */}
    <Switch>
          <Route exact path='/counter' component={Counter}/>
          <Route exact path='/emplist' component={EmpList}/>
          <Route exaxt path='/newEmployee' component={Employee}/>     
          <Route exact path='/listproduct' component={listproduct}/>
          <Route exaxt path='/addproduct' component={AddProduct}/> 
       </Switch>
        
    <Footer/>
    </div>
    </Router>
  </Provider>
  );
}

export default App;

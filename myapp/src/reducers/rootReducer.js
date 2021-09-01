import { combineReducers } from 'redux';

// import Ereducer from './Ereducer';
import counterReducer from './counterReducer';
import EmployeeReducer from './EmployeeReducer';
import productReducer from './productReducer'
import CReducer from './CReducer';
export const rootReducer =
    combineReducers({
        EmployeeReducer,
        counterReducer,
        productReducer,
        // CReducer,
        //....
    }
)
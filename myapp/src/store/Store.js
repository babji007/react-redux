import { createStore } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
// import {counterReducer} from '../reducers/counterReducer'
// import productReducer from '../reducers/productReducer';
// let productStore = createStore(productReducer);


let Store = createStore(rootReducer,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// store.dispatch(addTask('Study'));
// store.dispatch(addTask('Eat'));
// store.dispatch(addTask('Go to sleep'));
export default Store;
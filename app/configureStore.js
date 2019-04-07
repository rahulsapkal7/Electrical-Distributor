import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import UserData_red from '../app/redux/reducers/UserData_red';
import getCartred from '../app/redux/reducers/getCart_red';
import CartCountData_red from '../app/redux/reducers/CartCountData_red';


import { apiMiddleware } from 'redux-api-middleware';



 const store = createStore(combineReducers({
  UserData_red : UserData_red,
  getCartred : getCartred,
  CartCountData_red : CartCountData_red,
 }),applyMiddleware(thunk,apiMiddleware));


//  const store = createStore();


export default store;




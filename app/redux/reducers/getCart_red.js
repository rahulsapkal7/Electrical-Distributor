import * as types from '../types';



  


    export default function getCartred(state = [], action) {
        //  console.log( 'action.type:' + action.type);
              switch (action.type) {                                   
                  case 'GET_CART':
                   
                //   return action.cartData;   
                return Object.assign({}, state, {            
                    cartData: action.cartData,                                             
                });
                  default:
                      return state;

                     

              }
          }
    
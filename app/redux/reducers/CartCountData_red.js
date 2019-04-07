   import * as types from '../types';
    
    const defaultState = { 
        CartCount: 0,     
      };
    
    
    export default function CartCountData_red(state = defaultState, action) {
        
            switch (action.type) {
                case 'GET_CARTCOUNTDATA':
                return Object.assign({}, state, {            
                    CartCount: action.CartCount,                                             
                });
               
                default:
                    return state;
            }
        }
        
    
    



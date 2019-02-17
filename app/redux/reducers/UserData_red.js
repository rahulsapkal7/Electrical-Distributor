   import * as types from '../types';
    
    const defaultState = { 
        UserId: 0,     
      };
    
    
    export default function UserData_red(state = defaultState, action) {
        
            switch (action.type) {
                case 'GET_USERDATA':
                return Object.assign({}, state, {            
                    UserId: action.UserId,                                             
                });
               
                default:
                    return state;
            }
        }
        
    
    



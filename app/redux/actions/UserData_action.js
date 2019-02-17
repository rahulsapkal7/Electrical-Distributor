export const GET_USERDATA = 'GET_USERDATA';

export const UserData = (UserId) => ({
    type: GET_USERDATA,
    UserId: UserId,
 
});


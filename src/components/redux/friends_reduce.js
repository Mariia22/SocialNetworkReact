const TOGGLE_FOLLOWING = 'TOGGLE-FOLLOWING';
const SET_FRIENDS = 'SET-FRIENDS';

let initialState = {
    friendData: [
        { id: 1, name: 'Mariia', photo: 'https://stuki-druki.com/biofoto3/maria-pevchikh-01.jpg', follow: true },
        { id: 2, name: 'Anna', photo: 'https://s3-eu-west-1.amazonaws.com/znanylekarz.pl/doctor/70c91d/70c91d18b59f81b00c6b5e58b5cf9915_large.jpg', follow: true },
        { id: 3, name: 'Alina', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Alina_Sergeyeva_%282007%29.jpg/384px-Alina_Sergeyeva_%282007%29.jpg', follow: false }
    ]
}
const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOWING:
            return {
                ...state

            }
        case SET_FRIENDS:
            return {
                ...state
            }
        default: return state
    }
}

export const toggleFollowActionCreator = () => ({ type: TOGGLE_FOLLOWING })
export const setFriendsActionCreator = () => ({ type: SET_FRIENDS })
export default friendReducer;

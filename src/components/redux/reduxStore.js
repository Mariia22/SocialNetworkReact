import { combineReducers, createStore } from 'redux';
import dialogReducer from './dialogs_reduce';
import postReducer from './posts_reduce';
import friendReducer from './friends_reduce';
import profileReducer from './profile_reduce';

let reducers = combineReducers({
    posts: postReducer,
    dialogs: dialogReducer,
    users: friendReducer,
    profile: profileReducer
});
const store = createStore(reducers);
window.store = store;
export default store;
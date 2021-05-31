import { combineReducers, createStore } from 'redux';
import dialogReducer from './dialogs_reduce';
import postReducer from './posts_reduce';
import friendReducer from './friends_reduce';

let reducers = combineReducers({
    posts: postReducer,
    dialogs: dialogReducer,
    users: friendReducer,
});
const store = createStore(reducers);
window.store = store;
export default store;
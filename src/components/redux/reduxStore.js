import { combineReducers, createStore } from 'redux';
import { dialogReduce } from './dialogs_reduce';
import { postReduce } from './posts_reduce';
import { friendReduce } from './friends_reduce';

let reducers = combineReducers({
    posts: postReduce,
    dialogs: dialogReduce,
    friends: friendReduce
});
let store = createStore(reducers);

export default store;
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dialogReducer from './dialogs_reduce';
import postReducer from './posts_reduce';
import friendReducer from './friends_reduce';
import loginReducer from './login_reduce';

let reducers = combineReducers({
    posts: postReducer,
    dialogs: dialogReducer,
    users: friendReducer,
    login: loginReducer
});
const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dialogReducer from './dialogs_reduce';
import postReducer from './posts_reduce';
import friendReducer from './friends_reduce';
import loginReducer from './login_reduce';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app_reducer';

let reducers = combineReducers({
    posts: postReducer,
    dialogs: dialogReducer,
    users: friendReducer,
    login: loginReducer,
    form: formReducer,
    app: appReducer
});
const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/reduxStore.js';


let rerenderDOM = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderDOM(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderDOM(state);
});


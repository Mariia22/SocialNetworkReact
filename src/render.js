import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './components/redux/state';
import { addPost } from './components/redux/state';

export const rerenderDOM = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
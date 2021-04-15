import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const postData = [
  { message: 'Hi!!!', like: 5 },
  { message: 'How are you?', like: 3 },
  { message: 'I am OK', like: 7 },
];

const dialogData = [
  { id: 1, name: 'Mariia' },
  { id: 2, name: 'Anna' },
  { id: 3, name: 'Alina' },
  { id: 4, name: 'Malina' },
  { id: 5, name: 'Eva' },
];

let messageData = [
  { message: 'Hi' },
  { message: 'How are you!' },
  { message: 'I am OK' },
  { message: 'I am not alcoholic' }
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={postData} dialogs={dialogData} messages={messageData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import style from './Dialog.module.css'

const Dialog = () => {
    return (
        <div className={style.dialogs}>
            <ul className={style.dialog}>
                <li>Mariia</li>
                <li>Anna</li>
                <li>Alina</li>
                <li>Malina</li>
                <li>Eva</li>
            </ul>
            <ul className={style.message}>
                <li>Hi</li>
                <li>How are you!</li>
                <li>I am OK</li>
            </ul>
        </div>
    );
}
export default Dialog;
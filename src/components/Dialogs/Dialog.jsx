import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialog.module.css'

const Dialog = () => {
    return (
        <div className={style.dialogs}>
            <ul className={style.dialog}>
                <li><NavLink to='dialog/1'>Mariia</NavLink></li>
                <li><NavLink to='dialog/2'>Anna</NavLink></li>
                <li><NavLink to='dialog/3'>Alina</NavLink></li>
                <li><NavLink to='dialog/4'>Malina</NavLink></li>
                <li><NavLink to='dialog/5'>Eva</NavLink></li>
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
import React from 'react';
import preload from './../../images/loading.gif';
import style from './Preload.module.css';

const Preload = () => {
    return <div className={style.preload}><img src={preload} alt='loading' /></div>
}

export default Preload;

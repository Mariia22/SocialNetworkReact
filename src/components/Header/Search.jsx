import React from 'react';
import style from './Search.module.css'

const Search = () => {
    return (
        <form action='#' method='post'>
            <input type='text' className={style.searchInput}></input>
            <button className={style.searchButton}></button>
        </form>
    );
}
export default Search;
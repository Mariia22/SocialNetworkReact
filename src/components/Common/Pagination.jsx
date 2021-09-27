import React, { useState } from 'react';
import style from './Pagination.module.css';
const Pagination = ({ totalCount, pageSize, currentPage, changeCurrentPage, portionSize = 10 }) => {
    let countUsers = Math.ceil(totalCount / pageSize);
    const pagination = [];
    for (let i = 1; i <= countUsers; i++) {
        pagination.push(i)
    }
    let portionCount = Math.ceil(countUsers / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftBorderPortion = (portionNumber - 1) * portionSize + 1;
    let rightBorderPortion = portionNumber * portionSize;
    console.log(portionNumber);
    console.log(portionCount);
    return <div className={style.paginationList}>
        {
            portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
        }
        {
            pagination
                .filter(page => page >= leftBorderPortion && page <= rightBorderPortion)
                .map(page => <span className={currentPage === page ? style.selected : style.nonselected}
                    onClick={() => { changeCurrentPage(page) }}>{page}</span>)
        }
        {
            portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
        }
    </div>

}

export default Pagination;
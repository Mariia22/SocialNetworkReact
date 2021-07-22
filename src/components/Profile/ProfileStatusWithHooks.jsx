import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
    let [isEdit, setEdit] = useState(true);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateInput = () => {
        setEdit(false)
    }
    const deactivateInput = () => {
        setEdit(true);
        props.updateStatus(status);
    }
    const changeStatus = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div>
            {isEdit &&
                <div onClick={activateInput}><span>{status || '======'}</span></div>}
            {!isEdit &&
                <div><input autoFocus={true} onBlur={deactivateInput} onChange={changeStatus} value={status || ''} type="text" /></div>
            }
        </div >
    )
}
export default ProfileStatusWithHooks;
import React from 'react'

const ProfileContacts = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}</b>:{contactValue}
        </div>
    )
}

export default ProfileContacts

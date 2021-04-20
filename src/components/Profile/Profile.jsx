import React from 'react';
import ReactDOM from 'react-dom';
import foto from './../../images/foto.jpeg';
import style from './Profile.module.css'
import Friend from './Friend/Friend';



const Profile = (props) => {
    const friendList = props.state.map(friend => <Friend name={friend.name} photo={friend.photo} />);
    return (
        <div className={style.appProfile}>
            <div className={style.appProfileRed}></div>
            <img className={style.appProfilePhoto} src={foto} alt="User pic" width="100px" height="100px" />
            <div className={style.appProfileWhite}>
                <h3>Mariia Ushakova</h3>
                <p>Frontend developer</p>
                <div className={style.appProfileStatistic}>Following<span>34</span></div>
                <div className={style.appProfileStatistic}>Followers<span>34</span></div>
                <a>View Profile</a>
                <h4>Friends</h4>
                <div className={style.appProfileFriendsList}>
                    {friendList}
                </div>
            </div>
        </div>
    );
}
export default Profile;
import foto from './../images/foto.jpeg'


const Profile = () => {
    return (
        <div className='app_profile'>
            <div className='app_profile-red'></div>
            <img src={foto} alt="Photo" width="100px" height="100px" />
            <div className='app_profile-white'>
                <h3>Mariia Ushakova</h3>
                <p>Frontend developer</p>
                <div className='app_profile_statistic'>Following<span>34</span></div>
                <div className='app_profile_statistic'>Followers<span>34</span></div>
                <a>View Profile</a>
            </div>
        </div>
    );
}
export default Profile;
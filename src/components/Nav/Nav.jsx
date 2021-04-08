import style from './Nav.module.css'

const Nav = () => {
    return (
        <ul className={style.appNav}>
            <li className={style.active}>
                <a href='/profile'>Home</a>
            </li>
            <li>
                <a href='/dialog'>Messages</a>
            </li>
            <li>
                <a href='/news'>News</a>
            </li>
            <li>
                <a href='/music'>Music</a>
            </li>
            <li>
                <a href='/settings'>Settings</a>
            </li>
        </ul >
    );
}
export default Nav;
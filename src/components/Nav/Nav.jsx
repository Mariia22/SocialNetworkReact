import style from './Nav.module.css'

const Nav = () => {
    return (
        <ul className={style.appNav}>
            <li className={style.active}>Home</li>
            <li>Messages</li>
            <li>News</li>
            <li>Music</li>
            <li>Setting</li>
        </ul >
    );
}
export default Nav;
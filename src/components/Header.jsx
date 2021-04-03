import Logo from './Logo';
import Nav from './Nav';
import Search from './Search';
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <Logo />
            <Search />
            <Nav />
        </header>
    );
}
export default Header;
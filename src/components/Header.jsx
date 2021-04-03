import Logo from './Logo';
import Nav from './Nav';
import Search from './Search';

const Header = () => {
    return (
        <header>
            <Logo />
            <Search />
            <Nav />
        </header>
    );
}
export default Header;
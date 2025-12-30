import logo from '../assets/imgs/logo.png'
import navMenuLinks1 from '../data/navMenuLinks'
import style from './Header.module.css';
function NavMenuLinksFunction({ links }) {

    return (
        <>
            {links.map((elem) => (
                <li key={elem.id}>
                    <a href="#">{elem.label}</a>
                </li>
            ))}
        </>
    );

}
function openVerticalNavbar() {
    const vertical = document.querySelector(`.${style.vertical_navbar}`);
    if (vertical) {
        vertical.style.display = 'flex';
    }
}
function closeVerticalNavbar() {
    const vertical = document.querySelector(`.${style.vertical_navbar}`);
    if (vertical) {
        vertical.style.display = 'none';
    }
}
function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="logo" className={style.logo}></img>
                <div className={style.horizontal_navbar}>      
                    <ul className={style.nav_menu}>
                        <NavMenuLinksFunction links={navMenuLinks1}></NavMenuLinksFunction>
                        <li onClick={openVerticalNavbar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a></li>
                    </ul>
                </div>
                <div className={style.vertical_navbar}>

                    <ul className={style.nav_menu}>
                        <li onClick={closeVerticalNavbar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a></li>
                        <NavMenuLinksFunction links={navMenuLinks1}></NavMenuLinksFunction>
                    </ul>
                </div>
            </header>
        </>
    );

};
export default Header;
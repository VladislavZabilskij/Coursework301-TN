import styles from './Header.module.css'
import logoNUPP from '../images/logoNUPP.png'
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { Contacts } from '../Pages/Contacts';
import { NewsPage } from '../Pages/NewsPage';
import { Gallery } from '../Pages/Gallery';
import { AboutSite } from '../Pages/AboutSite';
import { NewsDescription } from '../Pages/NewsDescription';


const Header = () => {
    return (
        <>
            <header>
                <nav className={styles.wrapper}>
                    <Link to="/">
                        <img className={styles.logo} src={logoNUPP} alt='logo'/>
                    </Link>
                    <ul className={styles.menu}>
                            <li><Link to="/aboutsite">Про сайт</Link></li>
                            <li><Link to="/gallery">Галерея картинок</Link></li>
                            <li><Link to="/news">Новини</Link></li>
                            <li><Link to="/contacts">Контакти</Link></li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/aboutsite" element={<AboutSite />} />
                <Route path="/newsdescription/" element={<NewsDescription />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </>
    );
}

export {Header};
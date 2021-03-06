import React, {useState, useEffect} from 'react'
import './NavBar.scss';
import RightMenu from './Sections/RightMenu'

function NavBar() {
    const [Scroll, setScroll] = useState(false);

    const handleNavBg = () => {
        const isTop = window.Scroll < 100;
        setScroll(!isTop);
    };

    useEffect(() => {
        document.addEventListener("scroll", handleNavBg);
        return document.addEventListener("scroll", handleNavBg);
    }, [])
    return (
        <div className="header-division-background">
            <div className="column-header-center">
                <div className="column-header-center-logo">
                    <a className="headerLogo" href="/"><img className="logoImg" src='/logo.png' alt='logo'/></a>
                </div>
                <div className="column-header-center-menu">
                    <ul className="nav-container">
                        <a href="/"><li className="nav-item">HOME</li></a>
                        <a href="/new"><li className="nav-item">NEW</li></a>
                        <a href="/cd"><li className="nav-item">CD</li></a>
                        <a href="/lp"><li className="nav-item">LP</li></a>
                        <a href="/turntable"><li className="nav-item">TURNTABLE</li></a>
                        <a href="/magazine"><li className="nav-item">MAGAZINE</li></a>
                        <a href="/book"><li className="nav-item">BOOK</li></a>
                        <a href="/goods"><li className="nav-item">GOODS</li></a>
                        <div className="column-header-right">
                            <RightMenu />
                        </div>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default NavBar

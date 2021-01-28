import React from 'react'
import './NavBar.scss';
import RightMenu from './Sections/RightMenu'

function NavBar() {
    return (
        <div class="header-division-background">
            <div class="column-header-center">
                <div class="column-header-center-logo">
                    <a class="headerLogo" href="/"><img src='/logo.png' alt='logo' style={{ width:200, height:120}} /></a>
                </div>
                <div class="column-header-center-menu">
                    <ul class="nav-container">
                        <a href="/"><li class="nav-item">HOME</li></a>
                        <a href="/new"><li class="nav-item">NEW</li></a>
                        <a href="/cd"><li class="nav-item">CD</li></a>
                        <a href="/lp"><li class="nav-item">LP</li></a>
                        <a href="/turntable"><li class="nav-item">TURNTABLE</li></a>
                        <a href="/magazine"><li class="nav-item">MAGAZINE</li></a>
                        <a href="/book"><li class="nav-item">BOOK</li></a>
                        <a href="/goods"><li class="nav-item">GOODS</li></a>
                        <div class="column-header-right">
                            <RightMenu />
                        </div>
                    </ul>
                </div>
                
            </div>
            
        </div>
    )
}

export default NavBar

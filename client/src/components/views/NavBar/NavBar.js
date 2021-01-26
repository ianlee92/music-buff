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
                        <li class="nav-item">HOME</li>
                        <li class="nav-item">NEW</li>
                        <li class="nav-item">CD</li>
                        <li class="nav-item">LP</li>
                        <li class="nav-item">TURNTABLE</li>
                        <li class="nav-item">MAGAZINE</li>
                        <li class="nav-item">BOOK</li>
                        <li class="nav-item">GOODS</li>
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

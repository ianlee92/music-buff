import React from 'react'
import './NavBar.scss';
import axios from 'axios';
function NavBar(props) {

    const logoutHandler = () => {
        axios(`/api/users/logout`)
            .then(response => {
                if(response.data.success) {
                    props.history.push("/login")
                } else {
                    alert('로그아웃 하는데 실패했습니다.')
                }
            })
    }

    return (
        <div>
            <nav>
                <div class="site-division-background">
                        <div class="column-header-left">
                            
                        </div>
                        <div class="column-header-center">
                            <div class="column-header-center-logo">
                                <a class="headerLogo" href="/"><img src='/logo.png' alt='logo' style={{ width:150, height:100}} /></a>
                            </div>
                            <div class="column-header-center-menu">
                                <ul class="nav-container">
                                    <li class="nav-item">HOME</li>
                                    <li class="nav-item">NEW</li>
                                    <li class="nav-item">CD</li>
                                    <li class="nav-item">LP</li>
                                    <li class="nav-item">TURNTABLES</li>
                                    <li class="nav-item">MAGAZINE</li>
                                    <li class="nav-item">SALE</li>
                                    <li class="nav-item" onClick={logoutHandler}>Logout</li>
                                </ul>
                            </div>
                        </div>
                        <div class="column-header-right">
                            
                        </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar

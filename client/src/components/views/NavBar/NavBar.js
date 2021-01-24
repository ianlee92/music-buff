import React from 'react'
import './NavBar.scss';
import axios from 'axios';

function NavBar(props) {

    const onClickHandler = () => {
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
                <ul class="nav-container">
                    <li class="nav-item"><img src='https://www.macworld.co.uk/cmsdata/features/3792941/apple_music_logo_thumb1200_4-3.jpg' /></li>
                    <li class="nav-item">로그인</li>
                    <li class="nav-item" onClick={onClickHandler}>로그아웃</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar

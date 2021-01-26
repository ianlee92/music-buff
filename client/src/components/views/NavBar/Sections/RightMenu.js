import React from 'react'
import axios from 'axios';
import '../NavBar.scss';
import {UserOutlined, SearchOutlined, LockOutlined, ShoppingCartOutlined, UnlockOutlined} from '@ant-design/icons';
import { useSelector } from "react-redux";
import { withRouter } from 'react-router-dom';

function RightMenu(props) {
    const user = useSelector(state => state.user)
    if(user.auth_user){
        console.log(user.auth_user)
    }
    const logoutHandler = () => {
        axios.get(`/api/users/logout`)
            .then(response => {
                if(response.data.success) {
                    props.history.push("/login")
                } else {
                    alert('로그아웃 하는데 실패했습니다.')
                }
            });
    };

    if(!user.loginSuccess){ // 로그아웃 상태
        return (
                <ul class="icon-container">
                    <li class="icon-item"><SearchOutlined style={{fontSize:'20px'}}/></li>
                    <li class="icon-item"><a href="/login"><LockOutlined style={{fontSize:'20px', marginLeft:'10px'}}/></a></li>
                    <li class="icon-item" onClick={logoutHandler}><UnlockOutlined style={{fontSize:'20px', marginLeft:'10px'}}/></li>
                </ul>
            
        )
    } else { // 로그인 상태
        return (
            
                <ul class="icon-container">
                    <li class="icon-item"><SearchOutlined style={{fontSize:'20px'}}/></li>
                    <li class="icon-item"><UserOutlined style={{fontSize:'20px', marginLeft:'10px'}}/></li>
                    <li class="icon-item"><ShoppingCartOutlined style={{fontSize:'20px', marginLeft:'10px'}}/></li>
                    <li class="icon-item" onClick={logoutHandler}><UnlockOutlined style={{fontSize:'20px', marginLeft:'10px'}}/></li>
                </ul>
     
        )
    }
    
}

export default withRouter(RightMenu)

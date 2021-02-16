import React from 'react'
import axios from 'axios';
import '../NavBar.scss';
import {UserOutlined, SearchOutlined, LockOutlined, ShoppingCartOutlined, UnlockOutlined} from '@ant-design/icons';
import { USER_SERVER } from '../../../Config';
import { useSelector } from "react-redux";
import { withRouter } from 'react-router-dom';


function RightMenu(props) {
    const user = useSelector(state => state.user)

    const logoutHandler = () => {
        axios.get(`${USER_SERVER}/logout`)
            .then(response => {
                if(response.data.success) {
                    props.history.push("/login")
                } else {
                    alert('로그아웃 하는데 실패했습니다.')
                }
            });
    };

    if(user.userData && !user.userData.isAuth){ // 로그아웃 상태
        return (
                <ul className="icon-container">
                    <li className="icon-item"><a href="/search"><SearchOutlined style={{fontSize:'20px'}}/></a></li>
                    <li className="icon-item"><a href="/login"><LockOutlined style={{fontSize:'20px', marginLeft:'10px'}}/></a></li>
                </ul>
            
        )
    } else { // 로그인 상태
        return (    
                <ul className="icon-container">
                    <li className="icon-item"><a href="/search"><SearchOutlined style={{fontSize:'20px'}}/></a></li>
                    <li className="icon-item"><a href="/history"><UserOutlined style={{fontSize:'20px', marginLeft:'10px'}}/></a></li>
                    <li className="icon-item"><a href="/user/cart"><ShoppingCartOutlined style={{fontSize:'21px', marginLeft:'10px'}}/></a></li>
                    <li className="icon-item" onClick={logoutHandler}><UnlockOutlined style={{fontSize:'20px', marginLeft:'10px'}}/></li>
                </ul>
            
        )
    }
    
}

export default withRouter(RightMenu)

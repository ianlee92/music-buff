import React, {useState} from 'react'
import axios from 'axios';
import '../NavBar.scss';
import {UserOutlined, SearchOutlined, ShoppingCartOutlined, UnlockOutlined} from '@ant-design/icons';
import { useSelector } from "react-redux";
import { withRouter } from 'react-router-dom';

function SearchMenu(props) {
    const [SearchTerm, setSearchTerm] = useState("")
    const searchHandler = (event) => {
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }

    return (
        <ul class="icon-container">
            <li class="icon-item"><SearchOutlined style={{fontSize:'20px'}}/></li>
            <li class="icon-item"><input class='searchBar' type='text' onChange={searchHandler} value={SearchTerm} style={{width:'80px', height:'20px'}}></input></li>
        </ul>
    )
    
}

export default withRouter(SearchMenu)

import React, {useState} from 'react'
import './SearchMenu.scss';
import {SearchOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

function SearchMenu(props) {
    const [SearchTerm, setSearchTerm] = useState("")

    const searchHandler = (event) => {
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }

    return (
        <div className="search-division">
            <div className="search-container">
            <div className="search-icon"><SearchOutlined /></div>
            <div className="search-bar"><input className='searchBar' type='text' onChange={searchHandler} value={SearchTerm} ></input></div>
            </div>
        </div>
    )
    
}

export default withRouter(SearchMenu)

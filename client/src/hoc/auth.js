/* eslint-disable */

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {
    
    // option: null(아무나), true(로그인유저만), false(비로그인유저만)
    // adminRoute = null: App.js에서 아무것도 입력이 안되어있으면 null값이 기본(ES6문법)
    
    function AuthenticationCheck(props){
        let user = useSelector(state => state.user);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(response => {
                //로그인 하지 않은 상태 
                if (!response.payload.isAuth) {
                    if (option) {
                        props.history.push('/login')
                    }
                } else {
                    //로그인 한 상태 
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    } else {
                        if (option === false)
                            props.history.push('/')
                    }
                }
            })
        }, [])
        return <SpecificComponent {...props} user={user} />;
    }
    return AuthenticationCheck
}
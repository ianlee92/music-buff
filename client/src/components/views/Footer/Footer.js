import React from 'react'
import './Footer.scss';
import {MailOutlined, GithubOutlined, LinkOutlined} from '@ant-design/icons';

function Footer() {
    return (
        <div className="site-footer-background ">
            <div className="footer-info">
            <p>  상호: 뮤직버프 | 대표: 이용혁 | 전화: 010-3997-3141 <br />
                    주소: 서울시 성북구 | 호스팅제공자: 이용혁 | 이메일: proyong@kakao.com<br />
                    이용약관 개인정보처리방침 사업자정보확인
                    ⓒ2021 ianlee All rights reserved. </p>
                        <a href="mailto:proyong@kakao.com" target="_blank">
                        <MailOutlined style={{ fontSize: '20px', marginBottom: '10px', color: 'black' }}/></a>
                        <a href="https://github.com/ianlee92" target="_blank">
                        <GithubOutlined style={{ fontSize: '20px', marginLeft:'10px', color: 'black' }}/></a>
                        <a href="https://iancoding.tistory.com" target="_blank">
                        <LinkOutlined style={{ fontSize: '20px', marginLeft:'10px', color: 'black' }}/></a>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
            <div style={{"align":"left"}}>
           <p>  상호:뮤직버프 대표: 이용혁 | 개인정보관리책임자: 미입력 | 전화: 010-3997-3141 | 이메일: proyong@kakao.com <br />
                주소:서울시 성북구 | 사업자등록번호: 미입력 | 호스팅제공자: 이용혁<br />
                이용약관 개인정보차리방침 사업자정보확인
                ⓒ2021 ianlee All rights reserved. </p>
                </div>
        </div>
    )
}

export default Footer
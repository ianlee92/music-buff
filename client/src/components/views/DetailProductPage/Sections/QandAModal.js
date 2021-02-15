import React from 'react'

function QandAModal() {
        
    return (
        <div className="qa-field" style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            ,width: '100%', height: '100vh'
        }}>
            {/* <form className="qa-form" style={{display:'flex', flexDirection:'column'}}
                onSubmit={}
            >
                <div className="qa-header">
                    <span className="qa-title">회원가입</span>
                </div>

                <div className="qa-row">
                    <span className="qa-content">이메일 *</span>
                    <br />
                    <input id="qaId" type="email" value={Email} onChange={} />
                    <br />
                </div>

                <div className="qa-row">
                    <span className="qa-content">성명</span>
                    <br />
                    <input id="qaName" type="text" value={Name} onChange={} />
                    <br />
                </div>

                <div className="qa-row">
                    <span className="qa-content">비밀번호 *</span>
                    <br />
                    <input id="qaPwd" type="password" placeholder="  비밀번호는 6자리 이상이어야 합니다."value={Password} onChange={} />
                    <br />
                </div>

                <div className="qa-row">
                    <span className="qa-content">비밀번호 확인 *</span>
                    <br />
                    <input id="qaPwdConfirm" type="password" value={ConfirmPassword} onChange={} />
                    <br />
                </div>
                <div className="qa-btnWrapper">
                    <button className="qa-btn">글 저장</button>
                </div>
            </form> */}
        </div>
    )
}

export default QandAModal

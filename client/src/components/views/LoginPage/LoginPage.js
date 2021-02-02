import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';
import "./LoginPage.scss";

function LoginPage(props) {
    const dispatch = useDispatch();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 리프레쉬 방지
        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('Error')
                }
            })
    }

    return (
        <div className="login-field" style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            ,width: '100%', height: '100vh'
        }}>
            <form className="login-form" onSubmit={onSubmitHandler}>
                <div className="login-header">
                    <span className="login-title">로그인</span>
                </div>
                <div className="login-row">
                    <span className="login-content">이메일</span>
                    <br />
                    <input id="loginId" type="email" value={Email} onChange={onEmailHandler} />
                    <br />
                </div>
                <div className="login-row">
                    <span className="login-content">비밀번호</span>
                    <br />
                    <input id="loginPwd" type="password" value={Password} onChange={onPasswordHandler} />
                    <br />
                </div>
                <div className="login-btnWrapper">
                    <button className="login-btn">로그인하기</button>
                </div>
                <div className="register-btnWrapper">
                    <a className="btn_signup" href="/register">
                        <button type="button" className="login-btn">회원가입하기</button>
                    </a>
                </div>
            </form>
                
        </div>
    )
}

export default withRouter(LoginPage)

import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';
import "./RegisterPage.scss";

function RegisterPage(props) {
    const dispatch = useDispatch();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 리프레쉬 방지
        if(Password !== ConfirmPassword){
            return alert('비밀번호과 비밀번호 확인이 동일하지 않습니다!')
        }
        
        let body = {
            email: Email,
            password: Password,
            name: Name
        }

        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.success) {
                    props.history.push("/login")
                } else {
                    alert("회원가입 실패")
                }
            })
    }

    return (
        <div class="register-field" style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            ,width: '100%', height: '100vh'
        }}>
            <form class="register-form" style={{display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <div class="register-header">
                    <span class="register-title">회원가입</span>
                </div>

                <div class="regsiter-row">
                    <span class="register-content">이메일</span>
                    <br />
                    <input id="registerId" type="email" value={Email} onChange={onEmailHandler} />
                    <br />
                </div>

                <div class="regsiter-row">
                    <span class="register-content">성명</span>
                    <br />
                    <input id="registerName" type="text" value={Name} onChange={onNameHandler} />
                    <br />
                </div>

                <div class="regsiter-row">
                    <span class="register-content">비밀번호</span>
                    <br />
                    <input id="registerPwd" type="password" value={Password} onChange={onPasswordHandler} />
                    <br />
                </div>

                <div class="regsiter-row">
                    <span class="register-content">비밀번호 확인</span>
                    <br />
                    <input id="registerPwdConfirm" type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                    <br />
                </div>
                <div class="register-btnWrapper">
                    <button class="register-btn">회원 가입</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)

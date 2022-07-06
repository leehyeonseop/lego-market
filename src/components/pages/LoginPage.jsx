import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../ui/Input'
import Button from '../ui/Button'

const Wrapper = styled.div`
    padding: 30px 34px;
    
`

const H1 = styled.h1`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    margin-bottom: ${props => props.marginBottom}px;
`

const A = styled.a.attrs({
    href : "#",
})`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-decoration: none;
    color: #767676;
    display: block;
    margin-top: 20px;
    text-align: center;
`

function LoginPage() {

    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePw = (e) => {
        setPw(e.target.value)
    }
    
    const login = async () => {
        const url = "https://mandarin.api.weniv.co.kr/user/login"

        const loginData = {
            "user" : {
                "email" : email,
                "password" : pw
            }
        }

        const response = await fetch(url, {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(loginData)
        })

        const json = await response.json()
        console.log('token : ', json.user.token)
        localStorage.setItem("token", json.user.token)
    }

    return (
        <Wrapper>
            <H1 marginBottom={40}>로그인</H1>
            <Input
                type="email" 
                label="이메일" 
                marginBottom={16}
                onChange={handleEmail}
            />
            <Input
                type="password" 
                label="비밀번호" 
                marginBottom={30}
                onChange={handlePw}
            /> 
            <Button content="로그인" onClick={login}/>
            <A>이메일로 회원가입</A>
        </Wrapper>
    )
}

export default LoginPage
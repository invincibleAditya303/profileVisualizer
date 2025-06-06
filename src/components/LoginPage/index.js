import React, {useContext, useState} from "react";

import { ErrMsg, InputContainer, LoginBgContainer, LoginButton, LoginContainer, LoginFormContainer, LoginInput, LoginLabelInput, SignInDescription, SignInHeading } from "./styledComponents";
import { newUserContext } from "../../context/userDataContext";

const Login = props => {
    const [userData, setUserData] = useContext(newUserContext)
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")

    const onChangeLoginEmail = event => setLoginEmail(event.target.value)
    const onChangeLoginPassword = event => setLoginPassword(event.target.value)

    const onClickLogin = () => {
        const {history} = props
    
         userData.forEach((item) => {
            if (item.email === loginEmail && item.password === loginPassword) {
                setUserData(prevData =>
                    prevData.map((item) =>
                    item.email === loginEmail ? { ...item, isLoggedIn: true } : item
                    )
                )
                history.replace("/profile")
            } else {
                setErrMsg("Invalid username or password")
            }
        })
    }

    return (
        <LoginBgContainer>
            <LoginContainer>
                <LoginFormContainer>
                    <SignInHeading>Signin to your PopX account</SignInHeading>
                    <SignInDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</SignInDescription>
                    <InputContainer>
                        <LoginLabelInput htmlFor="email">Email Address</LoginLabelInput>
                        <LoginInput type="text" placeholder="Enter email address" id="email" value={loginEmail} onChange={onChangeLoginEmail} />
                    </InputContainer>
                    <InputContainer>
                        <LoginLabelInput htmlFor="password">Password</LoginLabelInput>
                        <LoginInput type="password" placeholder="Enter password" id="password" value={loginPassword} onChange={onChangeLoginPassword} />
                    </InputContainer>
                    <LoginButton type="button" onClick={onClickLogin}>Login</LoginButton>
                    <ErrMsg>{errMsg}</ErrMsg>
                </LoginFormContainer>
            </LoginContainer>
        </LoginBgContainer>
    )
}

export default Login
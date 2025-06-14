import styled from "styled-components";

export const LoginBgContainer = styled.div`
    width: 100vw;;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (width >= 776px) {
        min-height: 100vh;
    }
`

export const LoginContainer = styled.div`
    height: 812px;
    width: 375px;
    background-color: #F7F8F9;

    @media (width >= 776px) {
        height: 70vh;
        width: 60vw;
    }
`

export const LoginFormContainer = styled.form`
    height: 301px;
    width: 335px;
    margin-left: 20px;
    margin-top: 40px;
`

export const SignInHeading = styled.h1`
    color: #1D2226;
    font-size: 28px;
    font-family: "Rubik";
    font-weight: 500;
    line-height: 36px;
    padding-bottom: 14px;

    @media (width >= 776px) {
        font-size: 36px;
    }
`

export const SignInDescription = styled.p`
    color: #1D2226;
    font-size: 18px;
    font-family: "Rubik";
    line-height: 26px;
    opacity: 0.6;
    padding-bottom: 24px;

    @media (width >= 776px) {
        font-size: 22px;
        padding-bottom: 15px;
    }
`

export const InputContainer = styled.div`
    height: 49px;
    width: 335px;
    margin-bottom: 34px;

    @media (width >= 776px) {
        margin-bottom: 24px;
    }
`

export const LoginLabelInput = styled.label`
    color: #6C25FF;
    font-size: 13px;
    font-family: "Rubik";
    line-height: 17px;

    @media (width >= 776px) {
        font-size: 16px;
    }
`

export const LoginInput = styled.input`
    height: 40px;
    width: 335px;
    background-color: transparent;
    color: #1D2226;
    font-size: 18px;
    font-family: "Rubik";
    line-height: 26px;
    padding-left: 5px;
    border-radius: 6px;
    border: 1px solid #CBCBCB;
    outline: none;
`

export const LoginButton = styled.button`
    height: 46px;
    width: 335px;
    background-color: #CBCBCB;
    color: #FFFFFF;
    font-size: 16px;
    font-family: "Rubik";
    font-weight: 400;
    line-height: 17px;
    text-align: center;
    padding: 5px;
    border-radius: 6px;
    border-width: 0px;
    cursor: pointer;
    outline: none;
`

export const ErrMsg = styled.p`
    color: #FF0B37;
    font-size: 18px;
    font-family: "Rubik";
    line-height: 20px;
    padding-top: 10px;
`
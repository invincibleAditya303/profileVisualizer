import styled from "styled-components";

export const LandingPageBgContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (width >= 776px) {
        min-height: 100vh;
    }
`

export const LandingPageContainer = styled.div`
    height: 812px;
    width: 375px;
    background-color: #F7F8F9;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (width >= 776px) {
        height: 60vh;
        width: 60vw;
        justify-content: center;
    }
`

export const RegistrationCheckContainer = styled.div`
    height: 176px;
    width: 100%;
    margin-left: 20px;
    margin-bottom: 41px;
`

export const WelcomeHeading = styled.h1`
    color: #1D2226;
    font-size: 28px;
    font-family: "Rubik";
    font-weight: 500;
    line-height: 17px;
    padding-bottom: 10px;

    @media (width >= 776px) {
        font-size: 36px;
    }
`

export const PageDescription = styled.p`
    width: 232px;
    height: 48px;
    color: #1D2226;
    font-size: 18px;
    font-family: "Rubik";
    line-height: 26px;

    @media (width >= 776px) {
    width: 250px;    
    font-size: 22px;
    }
`

export const ButtonsContainer = styled.div`
    height: 112px;
    width: 335px;
    margin-top: 29px;

    @media (width >= 776px) {
    hieght: 132px;
    }
`

export const CreateAccountButton = styled.button`
    height: 46px;
    width: 335px;
    background-color: #6C25FF;
    color: #ffffff;
    font-size: 16px;
    font-family: "Rubik";
    font-weight: 400;
    line-height: 17px;
    text-align: center;
    border-radius: 6px;
    border-width: 0px;
    padding: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    outline: none;

    @media (width >= 776px) {
        margin-bottom: 20px;
    }
`

export const AlreadyRegisteredButton = styled(CreateAccountButton)`
    background-color: #6C25FF4B;
    color: #1D2226;
    margin-top: 0px;
    margin-bottom: 0px;
`
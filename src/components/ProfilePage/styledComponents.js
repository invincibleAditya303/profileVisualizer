import styled from "styled-components"

export const ProfileBgContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProfileContainer = styled.div`
    height: 812px;
    width: 375px;
    background-color: #F7F8F9;

    @media (width >= 776px) {
        width: 100vw;
    }
`

export const Navbar = styled.div`
    height: 68px;
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
`

export const NavbarTitle = styled.h1`
    color: #1D2226;
    font-size: 18px;
    font-family: "Rubik";
    line-height: 21px;
    padding-left: 15px;

    @media (width >= 776px) {
        font-size: 24px;
        padding-left: 50px;
    }
`

export const ProfileInfoContainer = styled.div`
    height: 76px;
    width: 335px;
    display: flex;
    margin-left: 20px;
    margin-top: 30px;
    margin-bottom: 30px;

    @media (width >= 776px) {
        height: 100px;
        margin-left: 60px;
    }
`

export const ProfileImgContainer = styled.div`
    height: 76px;
    width: 76px;
    position: relative;
    display: inline-block;
    margin-right: 20px;

    @media (width >= 776px) {
        height: 100px;
        width: 100px;
        margin-right: 40px;
    }
`

export const ProfileImg = styled.img`
    height: 76px;
    width: 76px;
    border-radius: 38px;
    object-fit: cover;

    @media (width >= 776px) {
        height: 100px;
        width: 100px;
    }
`

export const ProfileCameraIcon = styled.img`
    position: absolute;
    bottom: 5%;
    right: 5%;
    width: 20px;
    height: 20px;
`

export const ProfileDetailsContainer = styled.div`
    height: 41px;

    @media (width >= 776px) {
        height: 60px;
    }
`

export const ProfileTitle = styled.p`
    color: #1D2226;
    font-size: 15px;
    font-family: "Rubik";
    font-weight: 400;
    line-height: 19px;
    padding-bottom: 3px;

    @media (width >= 776px) {
        font-size: 30px;
    }
`

export const ProfileEmail = styled.p`
    color: #1D2226;
    font-size: 14px;
    font-family: "Rubik";
    line-height: 19px;

    @media (width >= 776px) {
        font-size: 26px;
    }
`

export const ProfileDescription = styled.p`
    width: 337px;
    height: 63px;
    color: #1D2226;
    font-size: 14px;
    font-family: "Rubik";
    line-height: 22px;
    text-transform: capitalize;
    padding-left: 20px;

    @media (width >= 776px) {
        width: 40vw;
        font-size: 22px;
        padding-left: 60px;
    }
`
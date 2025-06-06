import { useContext } from "react"

import { newUserContext } from "../../context/userDataContext"

import { Navbar, NavbarTitle, ProfileBgContainer, ProfileCameraIcon, ProfileContainer, ProfileDescription, ProfileDetailsContainer, ProfileEmail, ProfileImg, ProfileImgContainer, ProfileInfoContainer, ProfileTitle } from "./styledComponents"

const Profile = () => {
    const [userData] = useContext(newUserContext)

    const currentUser = userData.filter(eachItem => eachItem.isLoggedIn === true)
    const {name, email} = currentUser[0]

    return (
        <ProfileBgContainer>
            <ProfileContainer>
                <Navbar>
                    <NavbarTitle>Account Settings</NavbarTitle>
                </Navbar>
                <ProfileInfoContainer>
                    <ProfileImgContainer>
                        <ProfileImg src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1749178475/Ellipse_114_1_ztpc7y.jpg" alt="profile img" />
                        <ProfileCameraIcon src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1749179167/Group_1585_1_ecimhu.jpg" alt="camre icon" />
                    </ProfileImgContainer>
                    <ProfileDetailsContainer>
                        <ProfileTitle>{name}</ProfileTitle>
                        <ProfileEmail>{email}</ProfileEmail>
                    </ProfileDetailsContainer>
                </ProfileInfoContainer>
                <ProfileDescription>
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </ProfileDescription>
            </ProfileContainer>
        </ProfileBgContainer>
    )
}

export default Profile
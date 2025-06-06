import { Link } from "react-router-dom";

import { AlreadyRegisteredButton, ButtonsContainer, CreateAccountButton, LandingPageBgContainer, LandingPageContainer, PageDescription, RegistrationCheckContainer, WelcomeHeading } from "./styledComponents"; 

const LandingPage = () => (
    <LandingPageBgContainer>
        <LandingPageContainer>
            <RegistrationCheckContainer>
                <WelcomeHeading>Welcome to PopX</WelcomeHeading>
                <PageDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</PageDescription>
                <ButtonsContainer>
                    <Link to="/register">
                        <CreateAccountButton type="button">Create Account</CreateAccountButton>
                    </Link>
                    <Link to="/login">
                        <AlreadyRegisteredButton type="button">Already Registered?Login</AlreadyRegisteredButton>
                    </Link>
                </ButtonsContainer>
            </RegistrationCheckContainer>
        </LandingPageContainer>
    </LandingPageBgContainer>
)

export default LandingPage
import { useContext, useEffect, useState } from "react";
import { newUserContext } from "../../context/userDataContext";
import {v4 as uuidv4} from 'uuid'

import { CreateAccountHeading, RegisterBgContainer, RegisterButton, RegisterCheckType, RegisterContainer, RegisterFormContainer, RegisterInput, RegisterInputContainer, RegisterLabelInput, RegisterRadioContainer, RegisterRadioInput, RegisterRadioInputContainer, RegisterRadioInputOptionContainer, RegisterRadioLabelInput } from "./styledComponents";

const Register = () => {
    const [userData, setUserData] = useContext(newUserContext)
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [company, setCompany] = useState("")
    const [isAgency, setIsAgency] = useState("")
    
    const onChangeName = event => setName(event.target.value)
    const onChangeNumber = event => setPhoneNumber(event.target.value)
    const onChangeEmail = event => setEmail(event.target.value)
    const onChangePassword = event => setPassword(event.target.value)
    const onChangeCompany = event => setCompany(event.target.value)
    const onChangeAgency = event => setIsAgency(event.target.value)

    const onClickRegister = () => {
        const newUser = {
            id: uuidv4(),
            isLoggedIn: false,
            name,
            phoneNumber,
            email,
            password,
            company,
            isAgency
        }

        setUserData(prevData => [...prevData, newUser])
    }

    useEffect(() => {
        const storedData = localStorage.getItem("UserData")
    if (JSON.stringify(userData) !== storedData) {
      localStorage.setItem("UserData", JSON.stringify(userData))
    }
  }, [userData])
    
    return (
        <RegisterBgContainer>
            <RegisterContainer>
                <RegisterFormContainer>
                    <CreateAccountHeading>Create your PopX account</CreateAccountHeading>
                    <RegisterInputContainer>
                        <RegisterLabelInput htmlFor="name">Full Name</RegisterLabelInput>
                        <RegisterInput type="text" placeholder="Enter full name" id="name" value={name} onChange={onChangeName} />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <RegisterLabelInput htmlFor="phoneNumber">Phone Number</RegisterLabelInput>
                        <RegisterInput type="text" placeholder="Enter phone No" id="phoneNumber" value={phoneNumber} onChange={onChangeNumber} />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <RegisterLabelInput htmlFor="email">Email address</RegisterLabelInput>
                        <RegisterInput type="text" placeholder="Enter email" id="email" value={email} onChange={onChangeEmail} />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <RegisterLabelInput htmlFor="password">Password</RegisterLabelInput>
                        <RegisterInput type="password" placeholder="Enter password" id="password" value={password} onChange={onChangePassword} />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <RegisterLabelInput htmlFor="company">Company name</RegisterLabelInput>
                        <RegisterInput type="text" placeholder="Enter company name" id="company" value={company} onChange={onChangeCompany} />
                    </RegisterInputContainer>
                    <RegisterRadioContainer>
                        <RegisterCheckType>Are you an Agency?*</RegisterCheckType>
                        <RegisterRadioInputContainer>
                            <RegisterRadioInputOptionContainer>
                                <RegisterRadioInput type="radio" id="yes" name="isAgency" value="yes" onChange={onChangeAgency} checked />
                                <RegisterRadioLabelInput htmlFor="yes">Yes</RegisterRadioLabelInput>
                            </RegisterRadioInputOptionContainer>
                            <RegisterRadioInputOptionContainer>
                                <RegisterRadioInput type="radio" id="no" />
                                <RegisterRadioLabelInput htmlFor="no" name="isAgnecy" value="no" onChange={onChangeAgency} >No</RegisterRadioLabelInput>
                            </RegisterRadioInputOptionContainer>
                        </RegisterRadioInputContainer>
                    </RegisterRadioContainer>
                    <RegisterButton type="button" onClick={onClickRegister}>Create Account</RegisterButton>
                </RegisterFormContainer>
            </RegisterContainer>
        </RegisterBgContainer>
    )
}

export default Register
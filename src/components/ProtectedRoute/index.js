import { Route, Redirect } from "react-router-dom";

import { newUserContext } from "../../context/userDataContext";
import { useContext } from "react";

const ProtectedRoute = props => {
    const [userData] = useContext(newUserContext)
    const isAuthenticatedUser = userData.some(user => user.isLoggedIn)

    if (!isAuthenticatedUser) {
        return <Redirect to="/" />
    }

    return <Route {...props} />
}

export default ProtectedRoute
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useContext } from 'react'

import './App.css';
import LandingPage from './components/LandingPage';
import Login from './components/LoginPage';
import Register from './components/RegisterPage'
import Profile from './components/ProfilePage';
import { newUserContext } from './context/userDataContext'

const App = () => {
  const [userData] = useContext(newUserContext)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {Array.isArray(userData) && userData.map(item => {
            if (item.isLoggedIn && item !== undefined) {
              return <Route path="/profile" component={Profile}/>
            }
            else {
              return <Route path="/" component={LandingPage}/>
            }
          })}
      </Switch>
    </BrowserRouter>
  )
}

export default App;

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import LandingPage from './components/LandingPage';
import Login from './components/LoginPage';
import Register from './components/RegisterPage'
import Profile from './components/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

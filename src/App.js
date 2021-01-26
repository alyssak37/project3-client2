import { useState, useEffect } from 'react';
import { getUser, logout } from './services/userService';
import { getFact } from './services/facts-api';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
// import { addFavorite } from './services/facts-api';
import './App.css';
function App(props) {
  const [ userState, setUserState] = useState({
    user: getUser()
  });
  function handleSignupOrLogin(){
    setUserState({
      user: getUser()
    });
  }
  function handleLogout() {
    logout();
    setUserState({ user: null });
    props.history.push('/');
  }
  
  const [factData, setFactData] = useState({
    result: []
  });
  async function getAppData() {
      const data = await getFact();
      setFactData(data);
      console.log(data)
  }
  useEffect(() => {
    getAppData();
  }, []); 
  return (
    <div className="App">
      <Header handleLogout={handleLogout} user={userState.user} />
        <main>
          <Switch>
            <Route exact path="/" render={props =>
              <Home />
            } />
            <Route exact path="/dashboard" render={props =>
            userState.user ?
              <Dashboard factData={factData}/>
              :
              <Redirect to="/login" />
            } />
            <Route exact path="/signup" render={props =>
              <Signup {...props} 
              handleSignupOrLogin={handleSignupOrLogin}
              />
            } />
            <Route exact path="/login" render={props =>
              <Login {...props} 
              handleSignupOrLogin={handleSignupOrLogin}
              />
            } />
            <Route exact path="/favorites" render={props =>
              <Favorites {...props}
              />
            } />
        </Switch>
        </main>
      <Footer />
    </div>
  );
}
export default withRouter(App);

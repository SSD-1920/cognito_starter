import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/auth/Register';
import Welcome from './components/auth/Welcome';
import LogIn from './components/auth/LogIn';

class App extends Component {
  //declare state variables
  state = {
    isAuth: false,
    user: null
  }
  //helper methods to set variables
  authenticateUser = authenticated => {
    this.setState({isAuth: authenticated});
  }

  setAuthUser = user => {
    this.setState({user: user});
  }

  render() {
    //bundle state variables and helper methods to pass to each component
    const authProps = {
      isAuth: this.state.isAuth,
      user: this.state.user,
      authenticateUser: this.authenticateUser,
      setAuthUser: this.setAuthUser
    }

    //pass authProps (along with existing props as needed) to each component
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar auth={authProps}/>
            <Switch>
              <Route 
                exact path="/" 
                render={(props) => 
                  <Home {...props} auth={authProps} />
                }
              />
              <Route 
                exact path="/login" 
                render={(props) => 
                  <LogIn {...props} auth={authProps} />
                } 
              />
              <Route 
                exact path="/register" 
                render={(props) => 
                  <Register {...props} auth={authProps} />
                } 
              />
              <Route 
                exact path="/welcome" 
                render={(props) => 
                  <Welcome {...props} auth={authProps} />
                } 
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

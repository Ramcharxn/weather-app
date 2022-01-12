import React from "react";
import HomePage from "./pages/Home";
import WeatherPage from "./pages/Weather";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './pages/Navbar'
import './App.css'

function App() {
  return (
  <>
  <Router>
  <Navbar /> 
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
      <Switch>
        <Route exact path='/weather' component={WeatherPage}/>
      </Switch>
  </Router>
  </>
  )
}

export default App;
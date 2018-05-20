import React, { Component , Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Link to="/">Go to Home</Link>
          
          <Link to="/about">Go to About</Link>
          <Route exact path="/" component={ Home }></Route>
          <Route path="/about" component={ About }></Route>
        </Fragment>
      </Router>
    );
  }
}

export default App;

import React, { Component , Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <main>  
            <Route exact path="/" component={ Home }></Route>
            <Route path="/about" component={ About }></Route>
            <Route path="/contact" component={ Contact }></Route>
          </main>
          <nav>
            <Link to="/"><span>Go to Home</span></Link>
            <Link to="/about"><span>Go to About</span></Link>
            <Link to="/contact"><span>Go to Contact</span></Link>
          </nav>
        </Fragment>
      </Router>
    );
  }
}

export default App;

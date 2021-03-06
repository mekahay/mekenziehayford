import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Work from './Components/Work/Work';
import Project1 from './Components/Project1/Project1';
import Project2 from './Components/Project2/Project2';
import Project3 from './Components/Project3/Project3';
import Project4 from './Components/Project4/Project4';
import Project5 from './Components/Project5/Project5';
import Contact from './Components/Contact/Contact';
import AboutMe from './Components/AboutMe/AboutMe';
import Resume from './Components/Resume/Resume';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">

      <Router>
      <Header />
      <div>
      <hr/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/recollection" component={Project1} />
        <Route path="/commentdatabase" component={Project2} />
        <Route path="/cocktailapp" component={Project3} />
        <Route path="/instainspire" component={Project4} />
        <Route path="/happycabbage" component={Project5} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/aboutme" component={AboutMe} />
      </Switch>
      <hr/>
      </div>

      <Footer />
      </Router>
    </div>
  );
}

export default App;

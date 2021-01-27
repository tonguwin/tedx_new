import React from 'react';
import './App.css';
import FA20 from './Components/FA20/FA20';


import About from './Components/About/About';
import Blog from './Components/Blog/Blog'
// Heyo, remember to import the jsx files that you want routing to be named after ~ 
import Event from './Components/Event/Event';
import Home from './Components/Home/Home';
import Sponsors from './Components/Contact/Contact';

import Constellate from './Components/Event/pages/Constellate';
import Gravity from './Components/Event/pages/Gravity';
import Shift from './Components/Event/pages/Shift';



import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { StoreProvider } from './Components/Store';
import { Provider, connect } from 'react-redux';
import { Dispatch } from 'react-redux';
import rootStore from './redux/stores';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import './animation.css';
import Recruit from './img/Issue2/staticRecruit.png';

/* In the function below, follow similar ones like the About page and 
replicate it with your import component instead and name it 

After importing and naming the routing, you want to make sure it's accessible 
but putting it on the NavBar :) 
*/

const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/'
  const timeout = { enter: 300, exit: 200 }

  return (
    <Switch>


      <Route path="/">
        <Navbar />
        <Switch>
          {/* Index is landing page */}
          {/*<Route exact path="/" component={SP20} />*/}
          <Route exact path="/" component={Home} />
          {/* Current blank page for articles */}
          <Route exact path="/about" component={About} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/constellate" component={Constellate} />
          <Route exact path="/yourgravity" component={Gravity} />
          <Route exact path="/shiftenter" component={Shift} />
          <Route exact path="/sponsor" component={Sponsors} />
          
          <TransitionGroup component="main">
            <CSSTransition key={currentKey} classNames="testerfood" appear timeout={timeout}>
              <Switch location={location}>
                <Route exact path="/issue2" component={FA20} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Switch>
        <Footer /> 
      </Route>
    </Switch>
  )
}

export default withRouter(App)

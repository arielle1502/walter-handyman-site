import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/pages/Home';
import Layout from './components/layout/Layout';
import Jumbotron from './components/layout/Jumbotron';
import NavigationBar from './components/layout/NavigationBar';
import Services from './components/pages/Services';
// import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact'



function App() {
  return (
    <Fragment>
      <NavigationBar/>
       <Jumbotron/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/services' component={Services}></Route>
            <Route exact path='/projects' component={Projects}></Route>
            <Route exact path='/contact' component={Contact}></Route>
          </Switch>
        </Router>
        {/* <Footer/> */}
      </Layout>
    </Fragment>
  );
}

export default App;

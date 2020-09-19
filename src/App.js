import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Calendar from './pages/Calendar/Calendar';
import Blog from './pages/Blog/Blog';
import Links from './pages/Links/Links';

document.body.classList.add('container-fluid', 'p-0', 'h-100');

function App() {
  return (
    <div className="App d-flex flex-column h-100">
      <Navbar hostUrl="." titleShort="SWE Course" titleLong="Software Engineering Course"/>
      <div className="container-fluid Switch">
        <div className="row text-right">
          <div className="offset-sm-8 col-sm small pr-5 mr-sm-5 pb-1">
            <Link to={'/calendar'} className="text-dark">calendar</Link> &#183; <Link to={'/blog'} className="text-dark">blog</Link> &#183; <Link to={'/links'} className="text-dark">links</Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/calendar' component={Calendar} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/links' component={Links} />
      </Switch>
      <Footer version="v20.9.0"/>
    </div>
  );
}

export default App;

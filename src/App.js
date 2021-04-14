import './App.css';
import NavBar from './components/NavBar.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import React from 'react'
import Services from '../src/components/pages/Services'
import Products from '../src/components/pages/Products' 
import SignUp from './components/pages/SignUp';
import ProductsDetail from './components/pages/ProductsDetail'
import ebconfig from './'  
function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/services' exact component={Services} />
       <Route path='/products' component={Products} />
       <Route path='/sign-up' exact component={SignUp} />
       <Route path='/products-detail/:name' component={ProductsDetail} />
      </Switch>

    </Router>
      
    </>
  );
}

export default App;

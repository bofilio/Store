
import React from 'react'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProductDetailsPage from './pages/ProductDetailsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {


  return (

    <div style={{ height: "100%" }}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/category" exact component={CategoryPage}/>
          <Route path="/category/details" exact component={ProductDetailsPage}/>
        </Switch>
      </Router>
      
    </div>
  )
}

export default App

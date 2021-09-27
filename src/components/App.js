
import React from 'react'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProductDetailsPage from './pages/ProductDetailsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddCategory from './content-box/categories/addCategory';
import Settings from './pages/Settings';
const App = () => {

  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/settings" exact component={Settings}/>
          <Route path="/category/:category_name/" exact component={CategoryPage}/>
          <Route path="/category/:category_name/:id" exact component={ProductDetailsPage}/>
          <Route path="/category/add" exact component={AddCategory}/>
        </Switch>
      </Router>
      
    </div>
  )
}

export default App

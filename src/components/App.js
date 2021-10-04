
import React from 'react'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ProductDetailsPage from './pages/ProductDetailsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddCategory from './content-box/categories/addCategory';
import SettingsPage from './pages/SettingsPage';
import NewsDetailsPage from './pages/NewsDetailsPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import SearchPage from './pages/SearchPage';
const App = () => {

  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route  path="/wishlist" exact component={WishlistPage}/>
          <Route path='/search' exact component={SearchPage}/>
          <Route path="/cart" exact component={CartPage}/>
          <Route path="/settings" exact component={SettingsPage}/>
          <Route path="/news/:id" exact component={NewsDetailsPage}/>
          <Route path="/category/:category_name/" exact component={CategoryPage}/>
          <Route path="/category/:category_name/:id" exact component={ProductDetailsPage}/>
          <Route path="/category/add" exact component={AddCategory}/>
        </Switch>
      </Router>
      
    </div>
  )
}

export default App

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
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
import NotificationPage from './pages/NotificationPage';
import InstructionsPage from './pages/InstructionsPage';
import { ThemeProvider } from '@emotion/react';
import { light_theme, dark_theme } from '../theme';
import { styled } from '@mui/system';

const AppWraper = styled('div')(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default
}));
const App = () => {
  const mode = useSelector(state => state.ui.mode)
  const theme = mode === "light" ? light_theme : dark_theme;
  return (
    <ThemeProvider theme={theme}>
      <AppWraper>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/wishlist" exact component={WishlistPage} />
            <Route path='/search' exact component={SearchPage} />
            <Route path="/cart" exact component={CartPage} />
            <Route path="/notifications" exact component={NotificationPage} />
            <Route path="/guid" exact component={InstructionsPage} />
            <Route path="/settings" exact component={SettingsPage} />
            <Route path="/news/:id" exact component={NewsDetailsPage} />
            <Route path="/category/:category_name/" exact component={CategoryPage} />
            <Route path="/category/:category_name/:id" exact component={ProductDetailsPage} />
            <Route path="/category/add" exact component={AddCategory} />
          </Switch>
        </Router>
      </AppWraper>
    </ThemeProvider>
  )
}

export default App

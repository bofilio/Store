import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import { SideBarProvider } from './components/SideBarContext';
import Cover from './components/Cover';
import { CoverProvider } from './components/CoverContext';
import CategoryPage from './pages/CategoryPage';
import PruductDetailsPage from './pages/PruductDetailsPage';
import Page404 from './pages/Page404';
function App() {
  return (
    <SideBarProvider>
      <CoverProvider>
        <Cover />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/category/:name" exact component={CategoryPage} />
          <Route path="/category/:name/details/:id" exact component={PruductDetailsPage} />
          <Route path="*">
            <Page404/>
          </Route>
        </Switch>
      </Router> 
      </CoverProvider>
    </SideBarProvider>

  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import { SideBarProvider } from './components/SideBarContext';
import Cover from './components/Cover';
import { CoverProvider } from './components/CoverContext';
import CategoryPage from './pages/CategoryPage';
function App() {
  return (
    <SideBarProvider>

      <CoverProvider>
        <Cover />
     
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/category/:cat" exact component={CategoryPage} />
        </Switch>
      </Router> 
      </CoverProvider>
    </SideBarProvider>

  );
}

export default App;

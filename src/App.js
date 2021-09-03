import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import HomePage from './components/HomePage';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
      </Switch>
    </Router>
      
  
  );
}

export default App;

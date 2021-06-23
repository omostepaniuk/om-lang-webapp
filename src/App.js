import './App.css';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import BundlesPage from './BundlesPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/bundles">
          <BundlesPage/>
        </Route>
        <Route path="/">
          <Redirect to="/bundles"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

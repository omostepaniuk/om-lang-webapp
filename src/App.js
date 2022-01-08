import './App.css';
import BundlesPage from './BundlesPage';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Layout } from './Layout';
import { NoMatch } from './NoMatch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          {/* TODO the asterisk wildcard in a route below should likely be removed */}
          <Route path="bundles/*" element={<BundlesPage/>} />
          <Route path="*" element={<NoMatch/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

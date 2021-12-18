import './App.css';
import BundlesPage from './BundlesPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/bundles/*" element={<BundlesPage/>} />
      </Routes>
    </div>
  );
}

export default App;

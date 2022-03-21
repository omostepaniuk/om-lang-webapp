import './App.css';
import BundlesPage from './bundles/BundlesPage';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Layout } from './Layout';
import { NoMatch } from './NoMatch';
import BundlesList from './bundles/BundlesList';
import ContentBundle from './bundles/ContentBundle';
import ContentChunks from './bundles/ContentChunks';
import MemorizationPage from './bundles/memorization/MemorizationPage';
import Word from './bundles/memorization/Word';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bundles" element={<BundlesPage />}>
            <Route index element={<BundlesList />} />
            <Route path=":bundleName/chunks" element={<ContentBundle />}>
              <Route index element={<ContentChunks />} />
              <Route path=":chunkOrder" element={<MemorizationPage />}>
                <Route path="words/:wordOrder" element={<Word />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

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
import { AppRoutes } from './config/routes';

const { bundles: bundleRoutes } = AppRoutes;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={bundleRoutes.pathPattern} element={<BundlesPage />}>
            <Route index element={<BundlesList />} />
            <Route path={bundleRoutes.children.bundleChunks.pathPattern} element={<ContentBundle />}>
              <Route index element={<ContentChunks />} />
              <Route path={bundleRoutes.children.bundleChunks.children.chunk.pathPattern} element={<MemorizationPage />}>
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

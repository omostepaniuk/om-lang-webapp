import React, { useEffect, useState } from 'react';
import { apiUrl } from '../config';
import axios from 'axios';
import BundlesList from './BundlesList';
import { Route, Routes } from 'react-router-dom';
import ContentBundle from './ContentBundle';

const BundlesPage = () => {
  const [bundles, setBundles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`${apiUrl}/bundles`)
      .then(response => {
        setIsLoading(false);
        setBundles(response.data);
      }, error => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  return (
    <>
      <Routes>
        {/*<Route path=":bundleName/chunks/:chunkOrder" element={<Chunk bundles={this.state.bundles}/>}/>*/}
        <Route path={":bundleName/chunks"} element={<ContentBundle bundles={bundles}/>}/>
        <Route index element={
          <BundlesList
            bundles={bundles}
            isLoading={isLoading}
            isLoadingError={error}/>}/>
        {/*<Route path="" element={content}/>*/}
      </Routes>

      {isLoading &&
        <p>Loading content bundles...</p>
      }

      {!isLoading && error &&
        <p>An error occurred while loading content bundles. Please try again later...</p>
      }
    </>
  );
}

export default BundlesPage;

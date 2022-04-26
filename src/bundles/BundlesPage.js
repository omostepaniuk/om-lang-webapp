import React, { useEffect, useState } from 'react';
import { apiUrl } from '../config';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../shared/breadcrumbs/Breadcrumbs';

const BundlesPage = () => {
  const [bundles, setBundles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`${apiUrl}/bundles`).then(
      (response) => {
        setIsLoading(false);
        setBundles(response.data);
      },
      (error) => {
        setIsLoading(false);
        setError(true);
      }
    );
  }, []);

  return (
    <div className={'bundles-page'}>
      <Breadcrumbs {...{path: '/', name: 'Home'}} />
      {isLoading && <p>Loading content bundles...</p>}

      {!isLoading && error && (
        <p>
          An error occurred while loading content bundles. Please try again
          later...
        </p>
      )}
      <Outlet context={bundles} />
    </div>
  );
};

export default BundlesPage;

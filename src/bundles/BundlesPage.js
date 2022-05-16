import React, { useEffect, useState } from 'react';
import { apiUrl } from '../config';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../shared/breadcrumbs/Breadcrumbs';
import styles from './BundlesPage.module.scss';

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
    <div className={styles.bundlesPage}>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs {...{ path: '/', name: 'Home' }}/>
      </div>
      <div className={styles.bundlesPageContent}>
        {isLoading && <p>Loading content bundles...</p>}

        {!isLoading && error && (
          <p>
            An error occurred while loading content bundles. Please try again
            later...
          </p>
        )}
        <Outlet context={bundles}/>
      </div>
    </div>
  );
};

export default BundlesPage;

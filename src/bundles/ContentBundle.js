import React from 'react';
import { useParams, useOutletContext, Outlet } from 'react-router-dom';
import styles from './ContentBundle.module.scss';

const ContentBundle = () => {
  const { bundleName } = useParams();
  const bundles = useOutletContext();

  let bundle = null;
  if (bundles?.length ?? false) {
    bundle = bundles.find((bundle) => bundle.slug === bundleName);
  }

  return (
    <div className={styles.contentBundle}>
      {!!bundle ? (
        <div className={styles.bundleItem}>
          <h1 className={styles.bundleName}>{bundle.name}</h1>
          <Outlet context={bundle} />
        </div>
      ) : null}
    </div>
  );
};

export default ContentBundle;

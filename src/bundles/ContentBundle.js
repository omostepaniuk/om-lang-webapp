import React from 'react';
import { useParams, useOutletContext, Outlet } from 'react-router-dom';
import './ContentBundle.scss';

const ContentBundle = () => {
  const { bundleName } = useParams();
  const bundles = useOutletContext();

  let bundle = null;
  if (bundles?.length ?? false) {
    bundle = bundles.find((bundle) => bundle.slug === bundleName);
  }

  return (
    <>
      {!!bundle ? (
        <div className={`bundle-item`}>
          <h1 className={`bundle-name`}>{bundle.name}</h1>
          <Outlet context={bundle} />
        </div>
      ) : null}
    </>
  );
};

export default ContentBundle;

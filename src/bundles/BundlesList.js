import React from 'react';
import './BundlesList.scss';
import { Link, useOutletContext } from 'react-router-dom';

const BundlesList = (props) => {
  const bundles = useOutletContext();
  let content;

  if (bundles?.length ?? false) {
    content =
      <>
        <h1 className="header">Content Bundles ({bundles.length})</h1>
        <ul className="bundles-list">{
          bundles.map(bundle => {
            return (
              <li key={bundle.order.toString()}>
                <Link to={`${bundle.slug}/chunks`}>{bundle.name}</Link>
              </li>
            )
          })}
        </ul>
      </>
  } else {
    content = null;
  }

  return content;
}

export default BundlesList;
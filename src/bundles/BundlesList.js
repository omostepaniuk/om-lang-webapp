import React from 'react';
import './BundlesList.scss';
import { Link } from 'react-router-dom';

const BundlesList = (props) => {
  let content;

  if (props?.bundles?.length ?? false) {
    content =
      <>
        <h1 className="header">Content Bundles ({props.bundles.length})</h1>
        <ul className="bundles-list">{
          props.bundles.map(bundle => {
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
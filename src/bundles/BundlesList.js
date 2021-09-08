import React from 'react';
import ContentBundle from './ContentBundle';
import './BundlesList.scss';

const BundlesList = (props) => {
  const listItems = props.bundles.map(bundle => {
    return (
      <li key={bundle.order.toString()}>
        <ContentBundle bundle={bundle}/>
      </li>
    )
  });

  return (
    <ul className="bundles-list">
      {listItems}
    </ul>
  )
}

export default BundlesList;
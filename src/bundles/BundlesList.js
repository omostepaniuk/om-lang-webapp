import React from 'react';
import ContentBundle from './ContentBundle';
import './BundlesList.scss';

class BundlesList extends React.Component {

  render() {
    const listItems = this.props.bundles.map(bundle => {
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
}

export default BundlesList;
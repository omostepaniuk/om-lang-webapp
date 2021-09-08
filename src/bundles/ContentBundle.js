import React from 'react';
import  './ContentBundle.scss';
import ContentChunks from './ContentChunks';

class ContentBundle extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      isExpanded: false
    };

    this.toggleBundle = this.toggleBundle.bind(this);
  }

  toggleBundle() {
    this.setState((state, props) => ({ isExpanded: !state.isExpanded }))
  }

  render() {
    return (
      <div className={`bundle-item`}>
        <h1 className={`bundle-name ${this.state.isExpanded ? 'expanded' : ''}`}
            onClick={this.toggleBundle}>{this.props.bundle.name}</h1>
        <ContentChunks bundle={this.props.bundle}/>
      </div>
    );
  }
}

export default ContentBundle;

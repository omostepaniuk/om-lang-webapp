import React from 'react';
import { baseUrl } from './config';
import axios from 'axios';
import BundlesList from './bundles/BundlesList';

class BundlesPage extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.state = {
      bundles: [],
      error: null
    };
  }

  componentDidMount() {
    axios.get(`${baseUrl}/bundles`)
      .then(response => {
        // console.log(response);
        this.setState({
          bundles: response.data
        })
      }, error => {
        this.setState({ error: true });
      });
  }

  render() {
    let content;
    if (this.state.error) {
      content = <p className="error">An Error occurred</p>;
    } else if (this.state.bundles.length) {
      content = <BundlesList bundles={this.state.bundles}/>
    } else {
      content = <p>No Content Loaded</p>
    }

    return content;
  }
}

export default BundlesPage;

import React from 'react';
import { apiUrl } from './config';
import axios from 'axios';
import BundlesList from './bundles/BundlesList';
import { Route, Switch } from 'react-router-dom';
import Chunk from './bundles/Chunk';

class BundlesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      bundles: [],
      error: null
    };
  }

  componentDidMount() {
    axios.get(`${apiUrl}/bundles`)
      .then(response => {
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
      content = <p className="error">An Error occurred while loading content bundles</p>;
    } else if (this.state.bundles.length) {
      content = <BundlesList bundles={this.state.bundles}/>
    } else {
      content = <p>No Content Loaded</p>
    }

    return (
      <Switch>
        <Route exact path={`/bundles/:bundleName/chunks/:chunkOrder`}>
          <Chunk bundles={this.state.bundles}/>
        </Route>
        <Route exact path="/bundles">
          {content}
        </Route>
      </Switch>
    );
  }
}

export default BundlesPage;

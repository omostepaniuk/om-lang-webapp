import React from 'react';
import { apiUrl } from './config';
import axios from 'axios';
import BundlesList from './bundles/BundlesList';
import { Route, Routes } from 'react-router-dom';
import ContentBundle from './bundles/ContentBundle';

/* TODO convert to a function component */
class BundlesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: true,
      bundles: [],
      error: null
    };
  }

  componentDidMount() {
    axios.get(`${apiUrl}/bundles`)
      .then(response => {
        this.setState({
          isLoading: false,
          bundles: response.data
        })
      }, error => {
        this.setState({ isLoading: false, error: true });
      });
  }

  render() {
    return (
      <>
        <Routes>
          {/*<Route path=":bundleName/chunks/:chunkOrder" element={<Chunk bundles={this.state.bundles}/>}/>*/}
          <Route path={":bundleName/chunks"} element={<ContentBundle bundles={this.state.bundles}/>}/>
          <Route index element={
            <BundlesList
              bundles={this.state.bundles}
              isLoading={this.state.isLoading}
              isLoadingError={this.state.error}/>}/>
          {/*<Route path="" element={content}/>*/}
        </Routes>

        {this.state.loading &&
          <p>Loading content bundles...</p>
        }

        {!this.state.loading && this.error &&
          <p>An error occurred while loading content bundles. Please try again later...</p>
        }
      </>
    );
  }
}

export default BundlesPage;

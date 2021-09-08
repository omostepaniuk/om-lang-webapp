import './Chunk.scss'
import React from 'react';

export class Chunk extends React.Component {
  constructor(props, context) {
    super(props, context);

    console.log(this.props);
  }


  componentDidMount(params) {
    console.log('componentDidMount', params);
  }

  render() {
    return <div>chunk</div>
  }
}
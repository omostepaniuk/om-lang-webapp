import React from 'react';
import './ContentChunks.scss';

export class ContentChunks extends React.Component {

  render() {
    const chunks = this.props.chunks.map(chunk => (
      <li className="chunk-list-item" key={chunk.order.toString()}>Chunk - {chunk.order.toString()}</li>
    ));

    return <ul className="chunks-list">{chunks}</ul>;
  }
}
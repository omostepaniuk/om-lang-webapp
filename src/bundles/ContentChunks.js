import React from 'react';
import './ContentChunks.scss';

export class ContentChunks extends React.Component {

  render() {
    const chunks = this.props.chunks.map(chunk => (
      <li className="chunk-list-item" key={chunk.order.toString()}>
        <a href="javascript:">Chunk - {chunk.order.toString()}</a>
      </li>
    ));

    return <ul className="chunks-list">{chunks}</ul>;
  }
}